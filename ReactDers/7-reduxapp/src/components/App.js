import PersonelList from '../components/PersonelList'
import PersonelDetail from '../components/PersonelDetail'

const App = () => {
  return (
    <div className="container" >
      <div className="row">
        <div className="col-md-7">
          <PersonelList />
        </div>
        <div className="col-md-5">
          <PersonelDetail />
        </div>

      </div>


    </div>
  );
}

export default App;
