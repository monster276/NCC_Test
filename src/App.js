import './App.scss'

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <ul className="sidebarItem">
          <li className="sidebarList">Home</li>
          <li className="sidebarList">Services</li>
          <li className="sidebarList">News</li>
          <li className="sidebarList">Blog</li>
          <li className="sidebarList">Contact</li>
        </ul>
      </div>
      
      <div className="home">
        <div className="head">
          <div className="logo">
            <img src="./logoNCC.png" alt="logoncc" />
          </div>
          <div className="desc">
            <span>Lorem ipsum dolor sit ametdolorem </span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              eos fuga tempora nulla natus officia quia molestias velit illum
              laudantium facere nam voluptatum fugiat odio doloremque
              voluptates, placeat, cumque mollitia. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Molestias recusandae impedit
              temporibus unde distinctio, hic aliquid alias magnam cumque.
              Molestias doloremque soluta amet quaerat incidunt dolorem sapiente
              fugiat fugit labore!Lorem
            </p>
          </div>
        </div>
        <div className="body">
          <div className="bodyItem">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. .
            </span>
            <div className="about">
              <img src="./css.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda, maiores at reprehenderit officiis illo iste, quis
                culpa mollitia officia est incidunt, quia deserunt quisquam
                aspernatur. Laborum blanditiis ducimus amet dignissimos.
              </p>
            </div>
            <p className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              maiores, dolorem consequatur incidunt enim reprehenderit qui?{' '}
            </p>
          </div>
          <div className="bodyItem">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. .
            </span>
            <div className="about">
              <img src="./dw.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda, maiores at reprehenderit officiis illo iste, quis
                culpa mollitia officia est incidunt, quia deserunt quisquam
                aspernatur. Laborum blanditiis ducimus amet dignissimos.
              </p>
            </div>
            <p className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              maiores, dolorem consequatur incidunt enim reprehenderit qui?{' '}
            </p>
          </div>
          <div className="bodyItem">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. .
            </span>
            <div className="about">
              <img src="./url.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda, maiores at reprehenderit officiis illo iste, quis
                culpa mollitia officia est incidunt, quia deserunt quisquam
                aspernatur. Laborum blanditiis ducimus amet dignissimos.
              </p>
            </div>
            <p className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              maiores, dolorem consequatur incidunt enim reprehenderit qui?{' '}
            </p>
          </div>
        </div>
        <div className="footer">
          <span>Copyright 2021</span>
        </div>
      </div>
    </div>
  )
}

export default App
