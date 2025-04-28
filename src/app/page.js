import ClientFormHandle from '../components/ClientFormHandle.js';
import ServerFormHandle from '../components/ServerFormHandle.js';

export default function Home() {

  return (
    <main>
      <header><h1 className="display-4 fw-bold text-center">Create Multiplication Tables</h1></header>
      <article className='row'>
        <section className='col-md-6 col-lg-6 col-xl-6 p-5 table-responsive w-30 h-30 overflow-auto'>
          <ClientFormHandle />
            <table className='table table-bordered table-hover table-striped-columns' id='clientTableRes'></table>
        </section>
        <section className='col-md-6 col-lg-6 col-xl-6 p-5 table-responsive w-30 h-30 overflow-auto'>
          <ServerFormHandle />
          <table className='table table-bordered table-hover table-striped-columns' id='serverTableRes'></table>
        </section>
      </article>
      <footer>
        <div>Created by: ykeyvan</div>
      </footer>
    </main>
  )
}
