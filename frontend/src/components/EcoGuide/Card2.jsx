import React from 'react'

const Card2 = () => {
  return (
    <div class="relative grid h-[25rem] w-full flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
    <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
        <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
    </div>
    <div class="relative text-center p-6 px-6 py-14 md:px-12">
        <h2 class="mb-6 text-3xl font-medium text-white">
            How we design and code open-source projects?
        </h2>
        <h5 class="mb-4 text-xl font-semibold text-slate-300">
            Lewis Daniel
        </h5>
        <img
            alt="Lewis Daniel"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            class="relative inline-block h-32 w-32 rounded-full border border-white"
        />
    </div>
</div>

  )
}

export default Card2