import React from 'react'
import HeroBanner from '../HeroBanner/HeroBanner';
import Intro from '../Intro/Intro';
import CardGrid from '../CardGrid/CardGrid';
import ColThreeCards from '../ColThreeCards/ColThreeCards';

export default function index({blades}) {
    // let sections = blades.pageBuilderSections?.sections
    let sections = blades?.Sections
    let bladeList = pageBuilder(sections)
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
	data?.map((blade, index) => {
		if (blade.acf_fc_layout === 'hero_banner') {
			blades.push(<HeroBanner banner={blade}/>);
		} else if (blade.acf_fc_layout === 'intro') {
			blades.push(<Intro intro={blade} indx={index}/>);
		}else if (blade.acf_fc_layout === 'col_three_cards') {
			blades.push(<ColThreeCards colThreeCards={blade}/>);
		}
	});

	return blades;
}

// function pageBuilder(data, pageID) {
// 	let blades = [];
// 	data?.map((blade, index) => {
// 		if (blade.fieldGroupName.replace('PageBuilderSectionsSections', '') === 'HeroBannerLayout') {
// 			blades.push(<HeroBanner pageId={pageID}/>);
// 		} else if (blade.fieldGroupName.replace('PageBuilderSectionsSections', '') === 'IntroLayout') {
// 			// let 	
// 			blades.push(<Intro pageId={pageID} indx={index}/>);
// 		}else if (blade.fieldGroupName.replace('PageBuilderSectionsSections', '') === 'ColThreeCardsLayout') {
// 			blades.push(<ColThreeCards pageId={pageID}/>);
// 		}
// 	});

// 	return blades;
// }

