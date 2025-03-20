
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
 __        ___ _     _      _  __               _   _       
 \ \      / (_) | __| | ___| |/ /__ _ _ __ ___ | |_| |_ ___ 
  \ \ /\ / /| | |/ _` |/ _ \ ' // _` | '__/ _ \| __| __/ _ \
   \ V  V / | | | (_| |  __/ . \ (_| | | | (_) | |_| ||  __/
    \_/\_/  |_|_|\__,_|\___|_|\_\__,_|_|  \___/ \__|\__\___|
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
