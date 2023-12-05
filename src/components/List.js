import Card from './Card';

const List = ({ data }) => (
    <div className="row">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );

  export default List;





  