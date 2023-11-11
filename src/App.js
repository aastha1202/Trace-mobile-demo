import logo from './logo.svg';
import './App.css';
import { PieChart, Pie , BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import threedots from "./Assests/threedots.png"

function App() {

  const data = [
    { name: 'Technical scripter', students: 90, fill:'#e8453c' },
    { name: 'Geeksforgeeks', students: 90 , fill:"#4688f1"},
    { name: 'Geek-o-mania', students: 10, fill:"#54bdc9" },
    { name: 'Geek-o-mania', students: 128, fill:"#fd6d22" },
    { name: 'Geek-o-mania', students: 198, fill:"#3aa757" },
    { name: 'Geek-i-knack', students: 104, fill:"#f9bb2d" },

];

const newdata = [
  { name: 'shirts', 'Count of Items': 4, 'Avg Age of Items': 4.5, },
  { name: 'pants', 'Count of Items': 4, 'Avg Age of Items': 6.5, },
  { name: 'dresses', 'Count of Items': 3, 'Avg Age of Items': 6.5, },
  // Add more data as needed
];
  return (
    <div className="App">
   <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
   <h1 className='header'>Closet Summary</h1>
   <img src={threedots} />
   </div> 
   <h2 className='header' style={{color:"rgba(77, 179, 45, 1)", fontSize:'26px'}}>View Item List</h2>
   <h2 className='header' style={{color:'rgba(45, 49, 66, 1)',fontSize:'26px'}}>Here’s how your closet breaks down:</h2>
   <div  style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
    <h2 className='header' style={{color:'rgba(45, 49, 66, 1)'}}> Shirts</h2>
    <h2 className='header'>4</h2>
    </div>
    <p className='header' style={{color:'rgba(138, 144, 163, 1)',fontSize:"22px",marginTop:'-15px'}}> Fabric Composition</p>
    <div style={{display:'flex', alignItems:'center',gap:'30px'}}>
    <PieChart width={200} height={250}  >
            <Pie data={data}  isAnimationActive={false}  dataKey="students" outerRadius={100} innerRadius={50} fill="#fff"   />
        </PieChart>
     <div className='flex' style={{flexDirection:'column',gap:"0px",width:'100%'}}> 
   <div className='flex' style={{width:'100%'}}><span className='colors' style={{backgroundColor:'#4688f1'}} ></span> <p> avg Viscose </p></div> 
   <div className='flex'  style={{width:'100%'}}>   <span className='colors' style={{backgroundColor:'#e8453c'}}></span> <p> avg Nylon </p></div>
       <div className='flex' style={{width:'100%'}} ><span className='colors'   style={{backgroundColor:'#3aa757'}}></span> <p> avg Cotton </p></div>
       <div className='flex' style={{width:'100%'}} ><span className='colors'  style={{backgroundColor:'#fd6d22'}} ></span><p> avg Polyester </p></div>
     </div>
    </div>
    <h2 className='header' style={{color:"rgba(45, 49, 66, 1)",fontSize:'24px'}}>Your closet is in the bottom 30% of Trace users for Fabric Composition</h2>
    <div className='box'> <div className='inner-box'></div></div>

    <h2 className='header' style={{color:'rgba(45, 49, 66, 1)'}}>Average Age of Items</h2>
    <div style={{marginLeft:'-40px',marginTop:'65px'}}>
      <BarChart width={380} height={300}   data={newdata} isAnimationActive={false} >
      <Legend  wrapperStyle={{ top: -20, right: 0, textAlign: 'right', color:'black' }}  />
      <CartesianGrid vertical={false} />
      <XAxis dataKey="name"/>
      <YAxis axisLine={false} />
      <Bar dataKey="Count of Items" fill="#cccccc" />
      <Bar dataKey="Avg Age of Items" fill="#b7d6aa" />

    </BarChart>
    </div>
    </div>
  );
}

export default App;
