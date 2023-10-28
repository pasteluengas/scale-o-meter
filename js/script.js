let st1 = ["E"];
let st2 = ["B"];
let st3 = ["G"];
let st4 = ["D"];
let st5 = ["A"];
let st6 = ["E"];

const Notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"];

const codeNotes = {
    C: 0,
    Cs: 1,
    D: 2,
    Ds: 3,
    E: 4,
    F: 5,
    Fs: 6,
    G: 7,
    Gs: 8,
    A: 9,
    As: 10,
    B: 11,
};

//SCALES
const scales = {
    c_major: ["C", "D", "E", "F", "G", "A", "B"],
    c_minor: ["C", "D", "D#", "F", "G", "G#", "A#"],
}

function selectScale() {
    // Changing the tuning
    st1.splice(0);
    st2.splice(0);
    st3.splice(0);
    st4.splice(0);
    st5.splice(0);
    st6.splice(0);

    st1[0] = document.getElementById("st1").value;
    st2[0] = document.getElementById("st2").value;
    st3[0] = document.getElementById("st3").value;
    st4[0] = document.getElementById("st4").value;
    st5[0] = document.getElementById("st5").value;
    st6[0] = document.getElementById("st6").value;

    st1[0] = st1[0].replace("#", "s");
    st2[0] = st2[0].replace("#", "s");
    st3[0] = st3[0].replace("#", "s");
    st4[0] = st4[0].replace("#", "s");
    st5[0] = st5[0].replace("#", "s");
    st6[0] = st6[0].replace("#", "s");


    for (let i = 1; i < 13; i++) {
        st1.push(Notes[codeNotes[st1[0]] + i]);
        st2.push(Notes[codeNotes[st2[0]] + i]);
        st3.push(Notes[codeNotes[st3[0]] + i]);
        st4.push(Notes[codeNotes[st4[0]] + i]);
        st5.push(Notes[codeNotes[st5[0]] + i]);
        st6.push(Notes[codeNotes[st6[0]] + i]);
      }

    // Changing the tunning (showing the new notes)
    for (let i = 1; i < 13; i++) {
        document.getElementById("st1-" + i).innerHTML = st1[i];
        document.getElementById("st2-" + i).innerHTML = st2[i];
        document.getElementById("st3-" + i).innerHTML = st3[i];
        document.getElementById("st4-" + i).innerHTML = st4[i];
        document.getElementById("st5-" + i).innerHTML = st5[i];
        document.getElementById("st6-" + i).innerHTML = st6[i];
    }

    // Showing/Hidding notes depending by scale
    let actualScale = document.getElementById("scale_selected").value;
    if (actualScale == "all_notes") {
        for (let i = 1; i < 13; i++) {
            //document.getElementById("st1-" + i).style.backgroundColor = "rgba(0,0,0,0.5)";
            document.getElementById("st1-" + i).style.backgroundColor = "green";
            document.getElementById("st2-" + i).style.backgroundColor = "green";
            document.getElementById("st3-" + i).style.backgroundColor = "green";
            document.getElementById("st4-" + i).style.backgroundColor = "green";
            document.getElementById("st5-" + i).style.backgroundColor = "green";
            document.getElementById("st6-" + i).style.backgroundColor = "green";
            document.getElementById("st1-" + i).style.color = "white";
            document.getElementById("st2-" + i).style.color = "white";
            document.getElementById("st3-" + i).style.color = "white";
            document.getElementById("st4-" + i).style.color = "white";
            document.getElementById("st5-" + i).style.color = "white";
            document.getElementById("st6-" + i).style.color = "white";
        }
        for(let i = 1; i => 6; i++) {
            document.getElementById("st" + i).style.backgroundColor = "green";
            document.getElementById("st" + i).style.color = "white";
        }
    } else {
        for (let i = 1; i < 13; i++) {
            if (scales[actualScale].includes(document.getElementById("st1-" + i).innerHTML)) {
                document.getElementById("st1-" + i).style.backgroundColor = "green";
                document.getElementById("st1-" + i).style.color = "white";
            } else {
                document.getElementById("st1-" + i).style.backgroundColor = "rgba(0,0,0,0)";
                document.getElementById("st1-" + i).style.color = "rgba(0,0,0,0)";
            }

            if (scales[actualScale].includes(document.getElementById("st2-" + i).innerHTML)) {
                document.getElementById("st2-" + i).style.backgroundColor = "green";
                document.getElementById("st2-" + i).style.color = "white";
            } else {
                document.getElementById("st2-" + i).style.backgroundColor = "rgba(0,0,0,0)";
                document.getElementById("st2-" + i).style.color = "rgba(0,0,0,0)";
            }

            if (scales[actualScale].includes(document.getElementById("st3-" + i).innerHTML)) {
                document.getElementById("st3-" + i).style.backgroundColor = "green";
                document.getElementById("st3-" + i).style.color = "white";
            } else {
                document.getElementById("st3-" + i).style.backgroundColor = "rgba(0,0,0,0)";
                document.getElementById("st3-" + i).style.color = "rgba(0,0,0,0)";
            }

            if (scales[actualScale].includes(document.getElementById("st4-" + i).innerHTML)) {
                document.getElementById("st4-" + i).style.backgroundColor = "green";
                document.getElementById("st4-" + i).style.color = "white";
            } else {
                document.getElementById("st4-" + i).style.backgroundColor = "rgba(0,0,0,0)";
                document.getElementById("st4-" + i).style.color = "rgba(0,0,0,0)";
            }

            if (scales[actualScale].includes(document.getElementById("st5-" + i).innerHTML)) {
                document.getElementById("st5-" + i).style.backgroundColor = "green";
                document.getElementById("st5-" + i).style.color = "white";
            } else {
                document.getElementById("st5-" + i).style.backgroundColor = "rgba(0,0,0,0)";
                document.getElementById("st5-" + i).style.color = "rgba(0,0,0,0)";
            }

            if (scales[actualScale].includes(document.getElementById("st6-" + i).innerHTML)) {
                document.getElementById("st6-" + i).style.backgroundColor = "green";
                document.getElementById("st6-" + i).style.color = "white";
            } else {
                document.getElementById("st6-" + i).style.backgroundColor = "rgba(0,0,0,0)";
                document.getElementById("st6-" + i).style.color = "rgba(0,0,0,0)";
            }
        }
        for(let i = 1; i => 6; i++) {
            if (scales[actualScale].includes(document.getElementById("st" + i).value)){
                document.getElementById("st" + i).style.backgroundColor = "green";
                document.getElementById("st" + i).style.color = "white";
            } else {
                document.getElementById("st" + i + "-0").style.backgroundColor = "rgba(256, 256, 256, 0.5)";;
                document.getElementById("st" + i).style.backgroundColor = "rgba(147, 147, 147, 0.5)";
                document.getElementById("st" + i).style.color = "black";
            }
        }
    }

}