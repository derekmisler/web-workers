import React from 'react'
import { Grid, Button } from 'grommet'

export const Buttons = ({ sortWithWebWorker, sortNormally, isLoading }) => (
  <Grid
    gap='large'
    margin='large'
    columns={['1fr', '1fr']}
  >
    <Button primary label='SLOW' disabled={isLoading} onClick={sortNormally} size='large' color='status-error' />
    <Button primary label='FAST' disabled={isLoading} onClick={sortWithWebWorker} size='large' color='status-ok' />
  </Grid>
)