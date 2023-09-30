import React, { PureComponent, useEffect,useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Label } from 'recharts';
import {HTML5Icon,CSSIcon,JavascriptIcon,ReactjsIcon,VueJsIcon,AdobeXdIcon,
        CsharpIcon,NetcoreIcon,InformixIcon,JavaIcon,LaravelIcon,
        MysqlIcon,PostgresqlIcon,SqlserverIcon,
        PentahoIcon,XmlIcon,JsonIcon, AwsIcon} from '../../components/Utility/Icons';

import HTMLSvg from '../../img/HTML5_logo.svg'

const dataFrontEnd = [
    {
      subject: 'HTML',
      A: 100,
      B: 0,
      fullMark: 100,
    },
    {
      subject: 'CSS',
      A: 70,
      B: 0,
      fullMark: 100,
    },
    {
      subject: 'JAVASCRIPT',
      A: 100,
      B: 0,
      fullMark: 100,
    },
    {
      subject: 'ReactJS',
      A: 99,
      B: 0,
      fullMark: 100,
    },
    {
      subject: 'VueJS',
      A: 85,
      B: 0,
      fullMark: 100,
    },
    {
      subject: 'Adobe XD',
      A: 40,
      B: 0,
      fullMark: 100,
    },
  ];

  const dataBackEnd =[
  {
    subject: 'ASP.NET Core',
    A: 100,
    B: 0,
    fullMark: 100,
  },
  {
    subject: 'Informix 4GL',
    A: 70,
    B: 0,
    fullMark: 100,
  },
  {
    subject: 'Java',
    A: 20,
    B: 0,
    fullMark: 100,
  },
  {
    subject: 'ASP.NET MVC',
    A: 100,
    B: 0,
    fullMark: 100,
  },
  {
    subject: 'Laravel - PHP',
    A: 20,
    B: 0,
    fullMark: 100,
  },
  {
    subject: 'AWS',
    A: 50,
    B: 0,
    fullMark: 100,
  }
  ];
  const dataBase =[
    {
      subject: 'SQL Server',
      A: 80,
      B: 0,
      fullMark: 100,
    },
    {
      subject: 'Mysql',
      A: 90,
      B: 0,
      fullMark: 100,
    },
    {
      subject: 'PostgreSQL',
      A: 70,
      B: 0,
      fullMark: 100,
    },
    {
      subject: 'Informix',
      A: 50,
      B: 0,
      fullMark: 100,
    }];

    const dataIntegrations =[
        {
          subject: 'Pentaho',
          A: 50,
          B: 0,
          fullMark: 100,
        },
        {
          subject: 'Custom XML Integration App',
          A: 50,
          B: 0,
          fullMark: 100,
        },
        {
          subject: 'Json Integration',
          A: 90,
          B: 0,
          fullMark: 100,
        },
    ];



function Chart ({option}){
//   const demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';
    
  const [data,setData] = useState();
  
  useEffect(()=>{
    if(option === 1){
        setData(dataFrontEnd);
    }
    if(option === 2){
        setData(dataBackEnd);
    }
    if(option === 3){
        setData(dataBase);
    }

    if(option === 4){
        setData(dataIntegrations);
    }

    
  },[option]);
//https://stackoverflow.com/questions/59361614/custom-label-on-recharts-radar-chart
  const renderCustomAxisTick = ({ x, y, payload }) => {

    var renderIcon;
    var rendery = y-14;
    var renderx = x-14;
    var height = 40;
    var width = 40;

    switch (payload.value) {
      case 'HTML':
        rendery = rendery-20;
        renderx = renderx -5;
        renderIcon = <HTML5Icon/>;
        break;
      case 'CSS':
        rendery = rendery-10;
        renderx = renderx + 10; 
        renderIcon = <CSSIcon/>;
        break;
      case 'JAVASCRIPT':
        rendery = rendery + 5;
        renderx = renderx + 15; 
        height = 60;
        width = 60;
        renderIcon = <JavascriptIcon/>;
        break;
      case 'ReactJS':
        rendery = rendery + 10;
        renderx = renderx - 5;
        height = 80;
        width = 80;
        renderIcon = <ReactjsIcon/>;
        break;
      case 'VueJS':
        rendery = rendery + 5;
        renderx = renderx - 15;
        height = 60;
        width = 60;
        renderIcon = <VueJsIcon/>;
        break;
      case 'Adobe XD':
        rendery = rendery ;
        renderx = renderx - 15;
        height = 60;
        width = 60;
        renderIcon = <AdobeXdIcon/>;
        break;
      case 'ASP.NET Core':
        rendery = rendery-10 ;
        renderx = renderx ;
        height = 242;
        width = 242;
        renderIcon = <NetcoreIcon/>;
        break;
      case 'ASP.NET MVC':
        rendery = rendery+10 ;
        renderx = renderx -10;
        height = 60;
        width = 60;
        renderIcon = <CsharpIcon/>;
        break;
      case 'Informix 4GL':
        rendery = rendery-5 ;
        renderx = renderx+5;
        height = 612;
        width = 612;
        renderIcon = <InformixIcon/>;
        break;
      case 'Java':
        rendery = rendery+5 ;
        renderx = renderx ;
        height = 40;
        width = 40;
        renderIcon = <JavaIcon/>;
        break;
      case 'Laravel - PHP':
        rendery = rendery ;
        renderx = renderx -15 ;
        height = 70;
        width = 70;
        renderIcon  =<LaravelIcon/>;
        break;
      case 'SQL Server':
        rendery = rendery-40 ;
        renderx = renderx -25 ;
        height = 80;
        width = 80;
        renderIcon = <SqlserverIcon/>;
        break;
      case 'Mysql':
        rendery = rendery-10 ;
        renderx = renderx ;
        height = 180;
        width = 180;
        renderIcon = <MysqlIcon/>;
        break;
      case 'PostgreSQL':
        rendery = rendery+10 ;
        renderx = renderx -5;
        height = 70;
        width = 70;
        renderIcon = <PostgresqlIcon/>;
        break;
      case 'Informix':
        rendery = rendery ;
        renderx = renderx -10 ;
        height = 512;
        width = 512;
        renderIcon = <InformixIcon/>;
        break;
      case 'Pentaho':
        rendery = rendery-15 ;
        renderx = renderx - 125;
        height = 70;
        width = 210;
        renderIcon = <PentahoIcon/>;
        break;
      case 'Custom XML Integration App':
        rendery = rendery -5 ;
        renderx = renderx +10;
        height = 356;
        width = 356;
        renderIcon = <XmlIcon/>;
        break;
      case 'Json Integration':
        rendery = rendery -5 ;
        renderx = renderx -20;
        height = 356;
        width = 356;
        renderIcon = <JsonIcon/>;
        break;
      case 'AWS':
        rendery = rendery -5 ;
        renderx = renderx -20;
        height = 60;
        width = 60;
        renderIcon = <AwsIcon/>;
        break;
      default:
        renderIcon = '';
    }

    return (
      <svg x={renderx} y={rendery} width={width} height={height} viewBox="0 0 512 512" fill="#666">
        {/* <path d={path} /> */}
        {renderIcon}
      </svg>
    );
  };


  const renderResponse = <>
    <ResponsiveContainer width="100%" height="90%" >
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}  >
            <PolarGrid stroke='#000' />
            <PolarAngleAxis dataKey="subject" tick={renderCustomAxisTick} > 
            </PolarAngleAxis>
            <PolarRadiusAxis stroke='#000' />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.7} />
        </RadarChart>
    </ResponsiveContainer>
    </>;
  return (
    renderResponse
  );
}

export default Chart;