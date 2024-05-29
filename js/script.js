let listOf = document.getElementById("notesOlList");

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
    all_notes: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
    c_major: ["C", "D", "E", "F", "G", "A", "B"],
    c_minor: ["C", "D", "D#", "F", "G", "G#", "A#"],
    cs_major: ["C#", "D#", "F", "F#", "G#", "A#", "C"],
    csharp_minor: ["C#", "D#", "E", "F#", "G#", "A", "B"],
    d_major: ["D", "E", "F#", "G", "A", "B", "C#"],
    d_minor: ["D", "E", "F", "G", "A", "A#", "C"],
    ds_major: ["D#", "F", "G", "G#", "A#", "C", "D"],
    dsharp_minor: ["D#", "F", "F#", "G#", "A#", "B", "C#"],
    e_major: ["E", "F#", "G#", "A", "B", "C#", "D#"],
    e_minor: ["E", "F#", "G", "A", "B", "C", "D"],
    f_major: ["F", "G", "A", "A#", "C", "D", "E"],
    f_minor: ["F", "G", "G#", "A#", "C", "C#", "D#"],
    fs_major: ["F#", "G#", "A#", "B", "C#", "D#", "F"],
    fsharp_minor: ["F#", "G#", "A", "B", "C#", "D", "E"],
    g_major: ["G", "A", "B", "C", "D", "E", "F#"],
    g_minor: ["G", "A", "A#", "C", "D", "D#", "F"],
    gs_major: ["G#", "A#", "C", "C#", "D#", "F", "G"],
    gsharp_minor: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
    a_major: ["A", "B", "C#", "D", "E", "F#", "G#"],
    a_minor: ["A", "B", "C", "D", "E", "F", "G"],
    as_major: ["A#", "C", "D", "D#", "F", "G", "A"],
    asharp_minor: ["A#", "C", "C#", "D#", "F", "F#", "G#"],
    b_major: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
    b_minor: ["B", "C#", "D", "E", "F#", "G", "A"],
    c_major_pentatonic: ["C", "D", "E", "G", "A"],
    c_minor_pentatonic: ["C", "D#", "F", "G", "A#"],
    cs_major_pentatonic: ["C#", "D#", "F#", "G#", "A#"],
    d_major_pentatonic: ["D", "E", "F#", "A", "B"],
    d_minor_pentatonic: ["D", "F", "G", "A", "C"],
    ds_major_pentatonic: ["D#", "F", "G#", "A#", "C#"],
    e_major_pentatonic: ["E", "F#", "G#", "B", "C#"],
    e_minor_pentatonic: ["E", "G", "A", "B", "D"],
    f_major_pentatonic: ["F", "G", "A", "C", "D"],
    f_minor_pentatonic: ["F", "G#", "A#", "C", "D#"],
    fs_major_pentatonic: ["F#", "G#", "A#", "C#", "D#"],
    g_major_pentatonic: ["G", "A", "B", "D", "E"],
    g_minor_pentatonic: ["G", "A#", "C", "D", "F"],
    gs_major_pentatonic: ["G#", "A#", "C#", "D#", "F#"],
    a_major_pentatonic: ["A", "B", "C#", "E", "F#"],
    a_minor_pentatonic: ["A", "C", "D", "E", "G"],
    as_major_pentatonic: ["A#", "C", "D#", "F", "G"],
    b_major_pentatonic: ["B", "C#", "D#", "F#", "G#"],
    b_minor_pentatonic: ["B", "D", "E", "F#", "A"],
}

function selectScale() {
    // the actual scale
    let currentScale = document.getElementById("scale_selected").value;
    // listing the scale
    listOf.innerHTML = "";
    for (let i = 0; i < scales[currentScale].length; i++) {
        listOf.innerHTML += "<li>" + scales[currentScale][i] + "</li>";
    }
    document.getElementById("notesOf").innerHTML = "Notes of the " + currentScale.replace("_", " ").replace("sharp", "#").replace("s", "#").replace("major", "").toUpperCase().replace(" MINOR", "m").replace("ALL NOTE#", "all notes") + " scale:";


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
    if (currentScale == "all_notes") {
        for (let i = 1; i < 13; i++) {
            //document.getElementById("st1-" + i).style.backgroundColor = "rgba(0,0,0,0.5)";

            for(let u = 1; u <= 6; u++) {
                document.getElementById("st" + u + "-" + i).style.backgroundColor = "green";
                document.getElementById("st" + u + "-" + i).style.color = "white";
            }
            
        }
        for(let i = 1; i => 6; i++) {
            document.getElementById("st" + i).style.backgroundColor = "green";
            document.getElementById("st" + i).style.color = "white";
        }

    } else {
        for (let i = 1; i < 13; i++) {
            for (let q = 1; q <= 6; q++) {
                if (scales[currentScale].includes(document.getElementById("st" + q + "-" + i).innerHTML)) {
                    document.getElementById("st" + q + "-" + i).style.backgroundColor = "green";
                    document.getElementById("st" + q + "-" + i).style.color = "white";
                } else {
                    document.getElementById("st" + q + "-" + i).style.backgroundColor = "rgba(0,0,0,0)";
                    document.getElementById("st" + q + "-" + i).style.color = "rgba(0,0,0,0)";
                }
            }
        }
        for(let i = 1; i => 6; i++) {
            if (scales[currentScale].includes(document.getElementById("st" + i).value)){
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