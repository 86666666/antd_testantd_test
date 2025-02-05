import React, { useState, useRef, useEffect } from 'react';
import { Table, Input, Row, Col } from 'antd';

async function Get_data() {
    try {
        const response = await fetch("http://121.37.152.111:8000/tushare_api/cbv/huoli_lv/10/1/", {
            method: 'GET',
            headers: {
                // 如果需要其他头部字段，请在此添加
            }
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const data = await response.json();
        const dataSource = data['dataSource']; // 根据键名取值
        const stockData = data['stockColumns']; // 根据键名取值
        const zhangTing_date = data['zhangTing_date']; // 根据键名取值
        return { dataSource, stockData, zhangTing_date };
    } catch (error) {
        console.error('Error:', error);
        throw error; // 抛出错误以便外部可以捕获
    }
}

const { dataSource, stockData, zhangTing_date } = await Get_data();

const SectorTable = () => {
  const [selectedSector, setSelectedSector] = useState(null);
  const [searchText, setSearchText] = useState('');
  const searchInput = useRef(null); // 创建一个 ref 来保存 input 元素的引用

  // 在组件加载时默认选择第一个数据项
  useEffect(() => {
    if (dataSource && dataSource.length > 0) {
      setSelectedSector(dataSource[0].name);
    }
  }, [dataSource]);

  const columns = [
    {
      title: '股票名称',
      dataIndex: 'name',
      key: 'name',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={searchInput} // 将 ref 挂载到 input 元素上
            placeholder="请输入股票名称"
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <button onClick={() => handleReset(clearFilters)} style={{ width: 90, marginRight: 8 }}>重置</button>
          <button onClick={() => handleSearch(selectedKeys, confirm)} style={{ width: 90 }}>查询</button>
        </div>
      ),
      onFilter: (value, record) => record.name.toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => searchInput.current.select()); // 使用 current 属性来访问 input 元素
        }
      },
      render: text => (
        <span>{text}</span>
      ),
    },
    {
      title: '涨停次数',
      dataIndex: 'number',
      key: 'number',
    },
  ];

  const stockColumns = [
    {
      title: '关联性股票名称',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: '关联度',
      dataIndex: 'Correlation',
      key: 'Correlation',
    }
  ];

  const zhangtingColumns = [
    {
      title: '日期',
      dataIndex: 'z_date',
      key: 'z_date',
    },
    {
      title: '涨停次数前1000 股票',
      dataIndex: 'z_number',
      key: 'z_number',
    }
  ];

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const onRowClick = (record) => {
    setSelectedSector(record.name);
  };

  const components = {
    body: {
        row: (props) => <tr {...props} style={{ height: '5px' }} />, // 自定义行高
    },
  };

  return (
    <>
      <div style={{ height: '900px', overflowY: 'auto', paddingBottom: '25px' }}>
        <Row gutter={[16, 16]}>
          <Col span={3}>
            <Table
              dataSource={dataSource}
              columns={columns}
              onRow={(record) => ({
                style: { height: '5px' },
                onClick: () => onRowClick(record),
              })}
            />
          </Col>
          <Col span={3}>
            {selectedSector && (
              <Table
                dataSource={stockData[selectedSector]}
                columns={stockColumns}
              />
            )}
          </Col>
          <Col span={18}>
            <Table
              dataSource={zhangTing_date}
              columns={zhangtingColumns}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SectorTable;