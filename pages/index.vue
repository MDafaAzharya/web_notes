<script>
    import "../assets/css/index.css";
    import "~/components/Header";
    import "~/components/Footer";

</script>
<template>
    <Header/>
    <div>
        <div class="md:flex md:justify-around px-20 my-16" id="home">
            <div class="title font-sans">
                <h2 class="font-semibold text-2xl text-sky-400 text-center md:text-left">Daffz Notes</h2>
                <h1 class="font-bold text-4xl my-5 text-sky-400 text-center md:text-left"> Write thoughts, Write ideas, <br> Write experiences </h1>
                <p class="font-medium text-md w-full text-center md:text-left md:w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id tempor sem. Proin bibendum nunc vitae felis ultrices condimentum. Vivamus euismod lorem rutrum, mollis neque id, dignissim odio. </p>
                <button class="mt-5 bg-sky-600 py-3 px-5 rounded-full text-white font-semibold hover:opacity-90 hover:scale-110 duration-150 flex mx-auto md:mx-0"> Get Started </button>
            </div>
            <div>
                <img src="../assets/img/home_image.svg" alt="" width="500" class="mt-20 mt-md-0">
            </div>
        </div>
        <div class="bg-sky-400 py-5" id="feature">
            <div>
                <h1 class="title font-bold text-4xl my-5 text-white text-center "> What's going on here? </h1>
            </div>
            <div class="flex justify-center px-10 md:px-0">
                <img src="../assets/img/feature.svg" alt="" width="700" class="mt-20 md:mt-5">
            </div>
            <div class="grid md:grid-cols-3 grid-cols-1 gap-10 px-20 md:px-28 my-10">
                <div class="text-white border-0 px-5 py-5 rounded-2xl bg-sky-500 shadow-lg shad">
                    <div class="flex justify-start gap-3">
                        <Icon name="mdi:journal-multiple" color="#14532d" size="20" class="bg-green-600 px-1 py-2 w-10 h-10 rounded-xl"/>
                        <h2 class="title text-2xl font-bold pt-1"> Journaling </h2>
                    </div>
                    <p class="font-lg font-medium mt-3"> Write down ideas or events per day </p>
                </div>
                <div class="text-white border-0 px-5 py-5 rounded-2xl bg-sky-500 shadow-lg">
                    <div class="flex justify-start gap-3">
                        <Icon name="lets-icons:lamp-fill" color="#ca8a04" size="20" class="bg-yellow-300 px-1 py-1 w-10 h-10 rounded-xl"/>
                        <h2 class="title text-2xl font-bold pt-1"> Idea </h2>
                    </div>
                    <p class="font-lg font-medium mt-3"> write down your ideas in notes</p>
                </div>
                <div class="text-white border-0 px-5 py-5 rounded-2xl bg-sky-500 shadow-lg">
                    <div class="flex justify-start gap-3">
                        <Icon name="streamline:target-solid" color="#dc2626" size="20" class="bg-red-300 px-1 py-2 w-10 h-10 rounded-xl"/>
                        <h2 class="title text-2xl font-bold pt-1"> Target </h2>
                    </div>
                    <p class="font-lg font-medium mt-3"> Write down your targets specifically</p>
                </div>
            </div>
        </div>
        <div class="md:flex md:justify-between md:px-24 my-10" id="guide">
            <div class="px-10 md:px-0">
                <img src="../assets/img/guide.svg" alt="" width="400" class="mt-20 md:mt-5">
            </div>
            <div class="md:ml-10 ml-8 px-5">
                <div>
                    <h1 class="title font-bold md:text-4xl text-3xl py-3 text-sky-400 mt-5 md:mt-0">Guide to using the website</h1>
                    <p class="font-medium md:text-md text-md py-2">Below is a guide or steps for using the plugin, please read and understand one by one</p>
                </div>
                <div class="grid md:grid-cols-1 grid-cols-1 gap-x-8 gap-y-5 pt-4">
                    <div class="flex justify-start">
                        <Icon name="gridicons:add" color="#fff" size="20" class="bg-sky-300 p-1 w-8 h-8 rounded-full"/>
                        <p class="font-medium ml-2 my-auto text-md"> Click Add Note </p>
                    </div>
                    <div class="flex justify-start">
                        <Icon name="mingcute:save-fill" color="#fff" size="20" class="bg-sky-300 p-1 w-8 h-8 rounded-full"/>
                        <p class="font-medium ml-2 my-auto text-md"> Save the note </p>
                    </div>
                    <div class="flex justify-start">
                        <Icon name="akar-icons:edit" color="#fff" size="20" class="bg-sky-300 p-1 w-8 h-8 rounded-full"/>
                        <p class="font-medium ml-2 my-auto text-md"> Click edit when you want to edit </p>
                    </div>
                    <div class="flex justify-start">
                        <Icon name="fluent:delete-48-filled" color="#fff" size="20" class="bg-sky-300 p-1 w-8 h-8 rounded-full"/>
                        <p class="font-medium ml-2 my-auto text-md"> Click delete when you want to delete </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>