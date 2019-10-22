import React from 'react';

function Assignment() {
    const onAgencyAboutClick = (id) => {
        let elem = document.getElementById(id)
        if (elem) {
            window.scroll(0, 0)
            let coords = elem.getBoundingClientRect()
            window.scroll(coords.x, coords.y - 174)
        }

    }
    return (
        <div className='assignment'>
            <div className='assignment-layout'>
                <div className='assignment-info-block'>
                    <h1 className='assignment-header'>Test assignment for Frontend Developer position</h1>
                    <p className='assignment-text'>We kindly remind you that your test assignment should
                        be submitted as a link to github/bitbucket repository.
                        Please be patient, we consider and respond to every application that meets minimum requirements.
                        We look forward to your submission. Good luck!</p>
                    <button onClick= {() => onAgencyAboutClick('agencySignUp')} className='assignment-button'>Sign Up</button>
                </div>

            </div>

        </div>
    );
}

export default Assignment;