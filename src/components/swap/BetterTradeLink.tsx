import { stringify } from 'qs'
import React, { useContext, useMemo } from 'react'
import { useLocation } from 'react-router'
import { Text } from 'rebass'
import { ThemeContext } from 'styled-components'
import useParsedQueryString from '../../hooks/useParsedQueryString'
import useToggledVersion, { DEFAULT_VERSION } from '../../hooks/useToggledVersion'

import { StyledInternalLink } from '../../theme'
import { LightCard } from '../Card'
import { AutoColumn } from '../Column'

function VersionLinkContainer({ children }: { children: React.ReactNode }) {
  const theme = useContext(ThemeContext)

  return (
    <LightCard style={{ marginTop: '12px', padding: '0.5rem 0.5rem' }}>
      <AutoColumn gap="sm" justify="center" style={{ alignItems: 'center', textAlign: 'center' }}>
        <Text lineHeight="145.23%;" fontSize={14} fontWeight={400} color={theme.text1}>
          {children}
        </Text>
      </AutoColumn>
    </LightCard>
  )
}

export function DefaultVersionLink() {
  const location = useLocation()
  const search = useParsedQueryString()
  const version = useToggledVersion()

  const linkDestination = useMemo(() => {
    return {
      ...location,
      search: `?${stringify({
        ...search,
        use: DEFAULT_VERSION
      })}`
    }
  }, [location, search])

  return (
    <VersionLinkContainer>
      Showing {version.toUpperCase()} price.{' '}
      <StyledInternalLink to={linkDestination}>
        <b>Switch to Clickswap {DEFAULT_VERSION.toUpperCase()} ↗</b>
      </StyledInternalLink>
    </VersionLinkContainer>
  )
}
