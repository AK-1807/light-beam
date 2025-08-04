import React from 'react'
import HeroBanner from '../HeroBanner';
import Intro from '../Intro';
import CardGrid from '../CardGrid';
import ColThreeCards from '../ColThreeCards';

export default function index({blades}) {
    
    let sections = blades.pageBuilderSections?.sections
    let bladeList = pageBuilder(sections,blades.pageId)
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

function pageBuilder(data, pageID) {
	let blades = [];
	data?.map((blade, index) => {
		if (blade.fieldGroupName.replace('PageBuilderSectionsSections', '') === 'HeroBannerLayout') {
			blades.push(<HeroBanner pageId={pageID}/>);
		} else if (blade.fieldGroupName.replace('PageBuilderSectionsSections', '') === 'IntroLayout') {
			blades.push(<Intro pageId={pageID}/>);
		}else if (blade.fieldGroupName.replace('PageBuilderSectionsSections', '') === 'ColThreeCardsLayout') {
			blades.push(<ColThreeCards pageId={pageID}/>);
		}
	});

	return blades;
}