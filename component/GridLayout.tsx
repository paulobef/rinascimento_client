import React, { ReactElement } from 'react';

interface MasonryProps {
	columns: number
	gap: number
	children: Array<ReactElement> | undefined
}


function MasonryLayout ({ columns=2, gap=20, children }: MasonryProps) {

return (
	<div className={'grid'}>
		{children}
		<style jsx>{`
			/* The Masonry Container */
			.masonry {
			  margin: 1.5em auto;
			  column-gap: 1.5em;
			  column-count: 3;
			}
			
			/* Masonry on large screens */
			@media only screen and (max-width: 640px) {
			  .masonry {
			    column-count: 0;
			  }
			}

		`}</style>
	</div>
)

}

export default MasonryLayout