// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

// the component to test
import BuildControls from './BuildControls'

test.skip('loads and displays greeting', async () => {
    // Arrange
    // Act
    // Assert
  })