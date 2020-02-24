import React, { ReactElement } from 'react';

interface MasonryProps {
	columns: number
	gap: number
	children: Array<ReactElement> | undefined
}


function MasonryLayout ({ columns=2, gap=20, children }: MasonryProps) {

return (
	<div className={'masonry'}>
		{children}
		<style jsx>{`
			/* The Masonry Container */
			.masonry {
			  margin: 1.5em 1em 1em;
			  column-gap: 1.5em;
			  column-count: 2;
			}
			
			@media only screen and (min-width: 1224px) {
			  .masonry {
			    column-count: 3;
			  }
			}


		`}</style>
	</div>
)

}

export default MasonryLayout