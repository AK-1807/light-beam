import React from 'react'
import HeroBanner from '../HeroBanner';

export default function index({blades}) {
   
    let bladeList = pageBuilder({blades})
  return (
    <>
    {bladeList.map((blade, index) => {
				return (
						<React.Fragment key={index}>
							{blade}
						</React.Fragment>
				);
			})}
    </>
  )
}

function pageBuilder(data) {
	let blades = [];
	data?.blades?.map((blade, index) => {
		if (blade.fieldGroupName.replace('PageBuilderSectionsSections', '') === 'HeroBannerLayout') {
			blades.push(<HeroBanner banner={blade}/>);
		} 
	});

	return blades;
}