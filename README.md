<p align="center">
  <img src="https://github.com/W-araujo/Point-Record/blob/main/point%20record-api/frontend/src/assets/logo.png?raw=true" width="100" alt="logo"/>
</p>

# Point-Record

<ul>
<li>
<strong> DEV Brainny test project</strong>
</li>
<li>
<strong style="">Template based on the DEV Brainny test</strong>
</li>
</ul>

<a href="http://github.com/W-araujo">
<p>Author: Wesley Araujo</p>
</a>

<p align="center">
 <img src="https://github.com/W-araujo/Point-Record/blob/main/point%20record-api/frontend/src/assets/imgLogin.png" width="500" alt="login"/>
 
 <img src="https://github.com/W-araujo/Point-Record/blob/main/point%20record-api/frontend/src/assets/imgList.png" width="500" alt="content"/>

</p>

     
<h2>Documentação (rotas) - <a href="https://documenter.getpostman.com/view/12541520/TWDXpxVf">Link</a></h2>

<h1> ➡ Contents </h1>
<ul>
    <li>
     <a href="#features">Features</a>
    </li>
    <li>
      <a href="#intallation">Installation</a>
    </li>
    <li>
     <a href="#getting-started">Getting Started</a>
    </li>
</ul>

<h1 href="#features">⬇ Features</h1>
   <ul>
        <li>(Back-end) Register users</li>
        <li>(Back-end) Register point</li>
        <li>(Front-end) Check the list of points</li>
    </ul>
    
<h1 href="#installation">⬇ Installation </h1>
<h4>You need to install Node.js and Yarn first and then, to clone the project via HTTPS, run this command:</h4>

<p><code>git clone https://github.com/W-araujo/Point-Record.git</code></p>

<h4>(Back-end) Install dependecies</h4>

<p><code>npm install</code></p>

<h4>(Front-end) Install dependecies</h4>

<p><code>yarn install</code></p>


<h1 href="#getting-started">⬇ Getting Started </h1>

<h4>Back-end</h4>
  <ul>
       <li>
        Create your enviroment variables based on the examples of .env.example
        </li>
        <li>
            Fill in all fields according to your database
        </li>
           <li>
            Run this code to create create the database tables
            <code>npx knex migrate:latest</code>
        </li>
        <li>
        (optional) To delete the database tables use the command
        <code>npx knex migrate:rollback</code>
        </li>
        <li>
           To start the server run the command
           <code>npm start</code>
        </li>
   </ul>
   
   <h4>Front-end</h4>
   <ul>
       <li>
        To start the server run the command
           <code>yarn start</code>
        </li>
   </ul>

    
 
