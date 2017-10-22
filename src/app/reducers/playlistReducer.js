const initialUIState = {
  id:'demoSound',
  url: 'http://soundlab.local:8888/wp-content/uploads/2017/06/01-Under-the-Pressure.m4a',
  creator: 'War on Drugs',
  title: 'Under the Pressure',
  image: 'http://soundlab.local:8888/wp-content/uploads/2017/06/01-Under-the-Pressure-m4a-image.jpg'
}

export default function(state = initialUIState) {
  return [
    {
      id:'demoSound',
      url: 'http://soundlab.local:8888/wp-content/uploads/2017/06/01-Under-the-Pressure.m4a',
      creator: 'War on Drugs',
      title: 'Under the Pressure',
      image: 'http://soundlab.local:8888/wp-content/uploads/2017/06/01-Under-the-Pressure-m4a-image.jpg'
    },
    {
      id:'demoSound2',
      url: 'http://soundlab.local:8888/wp-content/uploads/2017/06/03-Im-Not-Calling-You-a-Liar.m4a',
      creator: 'Florence and the Machine',
      title: "I'm Not Calling You a Liar",
      image:'http://soundlab.local:8888/wp-content/uploads/2017/06/03-Im-Not-Calling-You-a-Liar-m4a-image.jpg'
    },
    {
      id:'demoSound3',
      url: 'http://soundlab.local:8888/wp-content/uploads/2017/06/02-The-Dress-Looks-Nice-On-You.m4a',
      creator: 'Sufjan Stevens',
      title: 'The Dress Looks Nice on You',
      image:'http://soundlab.local:8888/wp-content/uploads/2017/06/02-The-Dress-Looks-Nice-On-You-m4a-image.jpg'
    }

  ]


}
