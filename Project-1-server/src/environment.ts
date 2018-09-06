const dev = {
  context: 'http://localhost:3000/'
}

const prod = {
  context: 'http://ec2-18-222-148-38.us-east-2.compute.amazonaws.com:3001/'
}

export const environment = process.env.NODE_ENV === 'production'
  ? prod
  : dev
