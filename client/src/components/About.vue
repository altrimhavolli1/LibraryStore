<template>
    <div class="about-card">
        <div class="card-title">
            <img height="100px" src="../assets/images/profile.jpg" alt="avatar" class="avatar">
            <div class="title-text-content">
                <p>About Me</p>
                <h2>Altrim Havolli</h2>
            </div>
        </div>
        <div class="card-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit officia quae adipisci dolorem, 
                id doloremque quaerat rerum sequi ducimus unde fugiat iusto quia neque in atque natus sapiente eaque quo.</p>
            <table width="100%">
                <tr>
                    <th>Requirements</th>
                    <th>Solution</th>
                </tr>
                <tr>
                    <td>Design</td>
                    <td>Photoshop, Adobe XD</td>
                </tr>
                <tr>
                    <td>Front-end</td>
                    <td>React.Js, Vue.Js, HTML, CSS, JavaScript</td>
                </tr>
                <tr>
                    <td>Back-end</td>
                    <td>Node.Js, Express.Js, MongoDb</td>
                </tr>
                <tr>
                    <td>Mobile Development</td>
                    <td>Java, Android, React-Native, Firebase</td>
                </tr>
                <tr>
                    <td>GitHub</td>
                    <td>https://github.com/altrimhavolli1</td>
                </tr>
            </table>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Repellat tempore accusamus expedita,
                culpa placeat commodi facilis ea. Cupiditate, minima odio? Et rerum sapiente incidunt, dolor nisi aspernatur laboriosam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Repellat tempore accusamus expedita,
                culpa placeat commodi facilis ea. Cupiditate, minima odio? Et rerum sapiente incidunt, dolor nisi aspernatur laboriosam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Repellat tempore accusamus expedita,
                culpa placeat commodi facilis ea. Cupiditate, minima odio? Et rerum sapiente incidunt, dolor nisi aspernatur laboriosam.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Repellat tempore accusamus expedita,
                culpa placeat commodi facilis ea. Cupiditate, minima odio? Et rerum sapiente incidunt, dolor nisi aspernatur laboriosam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Repellat tempore accusamus expedita,
                culpa placeat commodi facilis ea. Cupiditate, minima odio? Et rerum sapiente incidunt, dolor nisi aspernatur laboriosam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Repellat tempore accusamus expedita,
                culpa placeat commodi facilis ea. Cupiditate, minima odio? Et rerum sapiente incidunt, dolor nisi aspernatur laboriosam.
            </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .about-card{
        padding: 4em;
        color: black;
    }
    .card-title{
        display: flex;
        align-items: center;
        background: #343a40;
        border-radius: 10px;
    }
    .avatar{
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 15%;
        margin: 30px;
    }
    .title-text-content p{
        color: white;
        margin-bottom: 0;
        color: rga(210, 210, 210);
    }
    .title-text-content h2{
        margin-top: 0;
        color: white;
    }
    .card-content {
        line-height: 1.5;
        margin: 30px auto;
    }
    table {
        border-spacing: none;
        margin: 50px auto;
    }
    table tr th,
    table tr td {
        border: 1px solid black;
        border-top: none;
        padding: 10px;
        text-align: center;

    }
    table tr th:first-of-type,
    table tr td:first-of-type {
        border-left: none;
    }
    table tr th:nth-of-type(2),
    table tr td:nth-of-type(2) {
        border-right: none;
    }
</style>