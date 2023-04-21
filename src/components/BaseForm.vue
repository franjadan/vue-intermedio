<template>
    <article>
        <h2>Subscíbete a mi lista de correo</h2>
        <form action="">
            <input type="text" placeholder="Correo-e">
            <input type="submit" value="Subcribirse">
        </form>
    </article>
</template>

<style scoped>
    article *{
        box-sizing: border-box;
    }

    article{
        margin-top: 10px;
        border: 1px solid gray;
    }

    form {
        padding: 20px;
    }

    input{
        width: 100%;
        margin: 10px 0px;
        padding: 10px;
    }
</style>