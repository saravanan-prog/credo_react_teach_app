
export default function BootstrapStart(){


    return <div>
        <div className="h1 text-primary text-center">Hello BootStrap Page</div>
        <button 
            className="btn btn-primary text-center"
            data-bs-toggle="collapse"
            data-bs-target="#mycontent"
        >Click me</button>

        <div className="collapse" id="mycontent">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic vel voluptatum, est quod doloremque blanditiis, nihil aspernatur dolorem eveniet dolores libero. Temporibus, harum assumenda! Qui nostrum tempora voluptates assumenda consequuntur.
        </div>



    </div>
}