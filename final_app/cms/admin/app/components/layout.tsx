import { memo, PropsWithChildren } from 'react'
import { Navigation, UserNavigation } from './navigation'
import { Field, Link } from '@contember/interface'
import { Logo } from './logo'
import { Binding, IdentityLoader } from '~/lib/binding'
import { LayoutComponent, Slots } from '~/lib/layout'
import { DimensionsSwitcher } from '~/lib/dimensions'

export const Layout = memo(({ children }: PropsWithChildren) => {
	return (
		<IdentityLoader>
			<LayoutComponent>

				<Slots.Logo>
					<Link to="index">
						<Logo />
					</Link>
				</Slots.Logo>

				<Slots.Navigation>
					<Navigation />
					<Binding>
					<div className="mb-4 mt-2">
						<DimensionsSwitcher options="Locale" slugField="code" dimension="locale" isMulti={true}>
							<Field field="label" />
						</DimensionsSwitcher>
					</div>
				</Binding>
				</Slots.Navigation>

				<Slots.UserNavigation>
					<UserNavigation />
				</Slots.UserNavigation>

				<Slots.Footer>
					<p><small>Created with <a className="content-link" href="https://www.contember.com/">Contember</a></small></p>
				</Slots.Footer>

				{children}
			</LayoutComponent>
		</IdentityLoader>
	)
})
Layout.displayName = 'Layout'
