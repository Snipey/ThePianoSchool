import Layout from "../components/layout";
import Helmet from 'react-helmet';
let schedule = "https://calendar.google.com/calendar/selfsched?sstoken=UUVmdjgzY21fdmxsfGRlZmF1bHR8MTQ0NTIyZWRjMWExOTcwNGFhOTc4ZDhkYTcxN2UxZWM"
let contact = "https://forms.gle/vo11ir5vfmN35NhD7"
const Home = () => (
  <Layout>
    <Helmet
      title="Welcome | The Piano School"
      meta={[{ property: 'og:title', content: 'Welcome' }]}
    />
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-6 flex flex-col items-center">
        <img className="rounded-full border-2 border-purple-600 hover:border-red-500 duration-500 transition w-64 h-64" src={require('../public/cover.jpg')}></img>
        <h1 className="pt-2 mb-2">The Piano School</h1>
        <span className="break-normal mx-12 text-center">
          Hello, my name is Stephanie and I teach Piano. Click schedule to see when you can <span className="underline text-white font-bold hover:text-purple-500"><a href={schedule}>schedule</a></span> a lesson. <br/>
           <b className="text-red-500 underline">Have not booked with me before?</b> <br/>
            Click the contact link and fill out the form for more information on what I offer.
        </span>
      </div>

      <ul className="flex-col md:w-1/4 w-3/4">
        <li className="flex-1 mt-4">
          <a className="text-center block border border-purple-500 rounded py-2 px-4 bg-purple-500 hover:bg-purple-700 text-white" 
              href={schedule}>
                Schedule
          </a>
        </li>
        <li className="flex-1 mt-4">
          <a className="text-center block border border-purple-500 rounded py-2 px-4 bg-purple-500 hover:bg-purple-700 text-white" 
              href={contact}>
                Contact
          </a>
        </li>
      </ul>
      <div className="flex items-center justify-center mt-6">
        <pre className="inline-block bg-gray-800 px-2 rounded-lg">Made with <span className="text-red-500">♥</span> by <a href="https://snipey.dev" className="hover:underline duration-500 transition">Stephen F</a></pre>
      </div>
    </div>
  </Layout>
);

export default Home;
