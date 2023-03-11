<template>
    <header class="bg-black py-12"> 
        <div class=" container flex items-center justify-between space-x-16">
            <a href="#" class=" text-6xl font-bold text-green-400 ">Logo</a>
            <nav class="flex justify-between flex-1">
                <div class="flex items-center text-lg space-x-8">
                    <a href="#" class=" text-white hover:text-red-500 transition decoration-500">Home</a>
                    <a href="#" class=" text-white hover:text-red-500 transition decoration-500">Category</a>
                    <a href="#" class=" text-white hover:text-red-500 transition decoration-500">Products</a>
                    <a href="#" class=" text-white hover:text-red-500 transition decoration-500">About</a>
                    <a href="#" class=" text-white hover:text-red-500 transition decoration-500">Contact</a>
                </div>

                <div class="flex items-center space-x-8">
                    <form>
                        <div class=" border-r px-4 mx-4 py-1 border-x-green-600">
                            <input minlength="3" maxlength="20" required class=" text-white bg-transparent border-b border-red-900 focus:outline-none"/>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>