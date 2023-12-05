  
        function showLuasForm() {
            var content = document.getElementById('content');
            content.innerHTML = `
            <div class="Text"><h2 id="Text">Hitung Luas Segitiga</h2></div>
                <form id="luas-form" onsubmit="event.preventDefault(); hitungLuas();">
                    <div class="TheInputContent">
                        <div id ="Inputs">
                    <input type="number" id="base" placeholder="Base">
                    <input type="number" id="height" placeholder="Height">
                        </div>
                        <div id="InputButton">
                    <button type="submit">Hitung</button>
                </div>
                    </div>
                </form>
                <div class="Results">
                <div id="luas-results"></div></div>
            `;
        }
        
        function showKelilingForm() {
            var content = document.getElementById('content');
            content.innerHTML = `
            <div class="Text"><h2 id="Text">Hitung Keliling Segitiga</h2></div>
                <form id="keliling-form" onsubmit="event.preventDefault(); hitungKeliling();">
                    <div class="TheInputContent">
                        <div id ="Inputs">
                    <input type="number" id="side1" placeholder="Side 1">
                    <input type="number" id="side2" placeholder="Side 2">
                    <input type="number" id="side3" placeholder="Side 3">
                </div>
                <div id="InputButton">
                    <button type="submit">Hitung</button>
                </div>
                </div>
                </form>
                <div class="Results"><div id="keliling-results"></div></div>
            `;
        }
        
        function hitungLuas() {
            var base = document.getElementById('base').value;
            var height = document.getElementById('height').value;
            var luas = 0.5 * base * height;
            document.getElementById('luas-results').innerHTML = 'Luas: ' + luas;
        }
        
        function hitungKeliling() {
            var side1 = document.getElementById('side1').value;
            var side2 = document.getElementById('side2').value;
            var side3 = document.getElementById('side3').value;
            var keliling = Number(side1) + Number(side2) + Number(side3);
            document.getElementById('keliling-results').innerHTML = 'Keliling: ' + keliling;
        }
        
