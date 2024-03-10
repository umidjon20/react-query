import React from 'react'
import './InfoSection.scss'

const data = [
    {
        id:1,
        title:'😊Reduced Anxiety',
        text:'Never worry about losing your audience.'
    },
    {
        id:2,
        title:'😐Lower Workload',
        text:"Just share one link. We'll handle the rest."
    },
    {
        id:3,
        title:'🔥More Time',
        text:'Spend less time on marketing tools.'
    }
]

function InfoSection() {
    const title = data.map((item)=>{
        const{id, title, text}=item
        return <div className="title" key={id}>
            <h5>{title}</h5>
            <p>{text}</p>
        </div>
    })
  return (
    <section>
        <div className="container">
            <div className="row">
                <h2>Why Creators Love Marico</h2>
                <div className="col">
                    {title}
                </div>
                <div className="connect">
                    <span>STEP 1</span>
                    <h6>Connect Your Content</h6>
                    <p>Bring all of your content together and get a Homepage that
                            automatically updates whenever you create anywhere online.
                    </p>
                    <button className='btn btn-cl btn-br'>View Avaliable Sources</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InfoSection