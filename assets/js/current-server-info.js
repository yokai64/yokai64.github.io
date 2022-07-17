function createfn() {
    // read in our data file
    fetch("https://gist.githubusercontent.com/yokai64/ab5028f76b0078167de214e068e9843a/raw/")
        .then(response => response.text())
        .then(data => {
            document.getElementById('last-updated').innerHTML = "";
            document.getElementById('current-version').innerHTML = "";
            document.getElementById('current-status').innerHTML = "";

            // create an array from the data
            data = data.slice(data.indexOf('\n') + 1)
                    .split('\n')
                    .map(v => v.split(','));

            document.getElementById('last-updated').innerHTML = "<p class='text-center'>Page last updated " + data[0][0] + "</p>";
            document.getElementById('current-version').innerHTML = "<h3 class='text-center'>" + data[0][1] + "</h3>";
            if(data[0][2] === "true") {
                document.getElementById('current-status').innerHTML = "<h3 class='text-center'><span class='online'>●</span> Online</h3>";
            } else {
                document.getElementById('current-status').innerHTML = "<h3 class='text-center'><span class='offline'>●</span> Offline</h3><h5 class='text-center'>Reason: " + data[0][3] + "<h5>";
            }
        });
}

createfn();