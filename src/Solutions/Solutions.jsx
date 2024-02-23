import React from 'react';
import './Solutions.css';
import sol3 from './sol3.PNG'
import sol1 from './sol1.PNG'
import sol2 from './sol2.PNG'

const Solutions = () => {
    return (
        <main className='solutionsMain'>
            {/* One */}
            <div className='solutions_one'>
                {/* <h1 className='One_title'>New Software
                    <br />
                    Update
                    <br />
                    Status Report
                </h1>
                <h3 className='One_subtitle'>January 2025</h3> */}
                <img src={sol1} alt="" />
            </div>

            {/* Two */}
            <div className='solutions_two'>
                {/* <h1 className='Two_title'>Project Goals</h1>
                <div className='Two_briefs'>
                    <div className='brief_section'>
                        <h1 className='brief_title'>AUDIT THE CURRENT SOFTWARE PROGRAM</h1>
                        <p className='brief_desc'>Diagnose issues in accessing and using the software</p>
                        <div className='end' />
                    </div>
                    <div className='brief_section'>
                        <h1 className='brief_title'>IMPLEMENT NEW SOFTWARE SYSTEM</h1>
                        <p className='brief_desc'>Redesign the software to keep it up-to-date</p>
                        <div className='end' />
                    </div>
                    <div className='brief_section'>
                        <h1 className='brief_title'>TEST NEW SOFTWARE</h1>
                        <p className='brief_desc'>Install and run a test on the redeveloped software</p>
                        <div className='end' />
                    </div>     
                </div> */}
                <img src={sol2} alt="" />
            </div>

            {/* Three */}
            <div className='solutions_three'>
                <img src={sol3} alt='sol3' />
            </div>
        </main>
    )
}

export default Solutions