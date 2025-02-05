import React, { useState, useRef, useEffect } from 'react';
import { Table, Input, Row, Col } from 'antd';

async function Get_data() {
    try {
        const response = await fetch("http://121.37.152.111:8000/tushare_api/cbv/huoli_lv/11/1/", {
            method: 'GET',
            headers: {
                // 如果需要其他头部字段，请在此添加
            }
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const data = await response.json();
        const dataSource = data['industrySource']; // 根据键名取值
        const stockData = data['stockData']; // 根据键名取值
        const industryStock = data['industryStock']; // 根据键名取值
        return { dataSource, stockData, industryStock};
    } catch (error) {
        console.error('Error:', error);
        throw error; // 抛出错误以便外部可以捕获
    }
}

const { dataSource, stockData, industryStock} = await Get_data();

const QushixingTable = () => {
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
      title: '板块名称',
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
          <button onClick={() => handleReset(clearFilters)} style={{ width: 70, marginRight: 8 }}>重置</button>
          <button onClick={() => handleSearch(selectedKeys, confirm)} style={{ width: 70 }}>查询</button>
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
      title: '年份',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: '1月',
      dataIndex: 'January',
      key: 'January',
      render: (text) => (
        <span style={{ color: text > 49 ? 'red' : 'inherit' }}>
          {text}
        </span>)
    },
    {
      title: '2月',
      dataIndex: 'February',
      key: 'February',
      render: (text) => (
        <span style={{ color: text > 49 ? 'red' : 'inherit' }}>
          {text}
        </span>)
    },
    {
      title: '3月',
      dataIndex: 'March',
      key: 'March',
      render: (text) => (
        <span style={{ color: text > 49 ? 'red' : 'inherit' }}>
          {text}
        </span>)
    },
    {
      title: '4月',
      dataIndex: 'April',
      key: 'April',
      render: (text) => (
        <span style={{ color: text > 49 ? 'red' : 'inherit' }}>
          {text}
        </span>)
    },
    {
      title: '5月',
      dataIndex: 'May',
      key: 'May',
      render: (text) => (
        <span style={{ color: text > 49 ? 'red' : 'inherit' }}>
          {text}
        </span>)
    },
    {
      title: '6月',
      dataIndex: 'June',
      key: 'June',
      render: (text) => (
        <span style={{ color: text > 49 ? 'red' : 'inherit' }}>
          {text}
        </span>)
    },
    {
      title: '7月',
      dataIndex: 'July',
      key: 'July',
      render: (text) => (
        <span style={{ color: text > 49 ? 'red' : 'inherit' }}>
          {text}
        </span>)
    },
    {
      title: '8月',
      dataIndex: 'August',
      key: 'August',
      render: (text) => (
        <span style={{ color: text > 49 ? 'red' : 'inherit' }}>
          {text}
        </span>)
    },
    {
      title: '9月',
      dataIndex: 'September',
      key: 'September',
      render: (text) => (
        <span style={{ color: text > 49 ? 'red' : 'inherit' }}>
          {text}
        </span>)
    },
    {
      title: '10月',
      dataIndex: 'October',
      key: 'October',
      render: (text) => (
        <span style={{ color: text > 49 ? 'red' : 'inherit' }}>
          {text}
        </span>)
    },
    {
      title: '11月',
      dataIndex: 'November',
      key: 'November',
      render: (text) => (
        <span style={{ color: text > 49 ? 'red' : 'inherit' }}>
          {text}
        </span>)
    },
    {
      title: '12月',
      dataIndex: 'December',
      key: 'December',
      render: (text) => (
        <span style={{ color: text > 49 ? 'red' : 'inherit' }}>
          {text}
        </span>)
    }
  ];

  const industryStockColumns = [
    {
      title: '板块所属股票',
      dataIndex: 'name',
      key: 'namer',
    },
    {
      title: '涨停次数',
      dataIndex: 'number',
      key: 'number',
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
          <Col span={13}>
            {selectedSector && (
              <Table
                dataSource={stockData[selectedSector]}
                columns={stockColumns}
              />
            )}
          </Col>
          <Col span={6}>
            {selectedSector && (
              <Table
                dataSource={industryStock[selectedSector]}
                columns={industryStockColumns}
              />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default QushixingTable;