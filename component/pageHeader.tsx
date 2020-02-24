import React, { Fragment } from 'react'
import Link from "next/link";

function pageHeader(
	{
		title,
		lead,
		link,
		backgroundImage=null,
	})
{
	return (
		<Fragment>
			<div className={'full-page'}>
				<div className={'container-large'}>
					<Link href={link}>
						<a>
							<h1>{title}</h1>
						</a>
					</Link>
					<p>{lead}</p>
				</div>
			</div>
			<style jsx>{`
				h1, p {
					color: white;
					text-shadow: 1px 1px 50px black;
				}
				
				h1:hover {
					color: lightgray;
                    transition: color  0.5s;
				}
				.full-page {
					margin: 0 0 4em 0;
					padding: 4em 1em 6em 1em;
					${ backgroundImage ? `
					background: url(${backgroundImage}) no-repeat center center fixed;
					background-size: cover;
					` : '' }
				}
			`}</style>
		</Fragment>
	)
}

export default pageHeader