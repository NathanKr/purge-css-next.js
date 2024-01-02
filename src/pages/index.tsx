import Alert from 'react-bootstrap/Alert';


export default function HomePage() {
  return (
    <div className="container">
      <Alert>This is an alert from react-bootstrap - style not working with PurgeCSS</Alert>
      <div className="row">
        <div className="col-md-6">
          <h1>This Website is Using Bootstrap</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            vestibulum eros, eu sagittis arcu ullamcorper ut.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Featured Content</h5>
              <p className="card-text">
                Some text describing the featured content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}