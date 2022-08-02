import React,{useState,useEffect} from 'react';


const AssessmentDetail = ({assessment}) =>{

	

	return(
		<>
		<div className='w-full py-8 px-8 lg:px-0 lg:py-0 lg:flex-1 rounded flex justify-center items-center flex-col'>
                    <p className='text-sm font-bold'>{assessment.summary}</p>
    </div>
		</>
		)
}

export default AssessmentDetail;