
        // City and Pin data
        var cityPins = {
            basti: ["b1", "b2", "b3"],
            lucknow: ["l1", "l2", "l3"],
            ghaziabad: ["g1", "g2", "g3"],
            noida: ["n1", "n2", "n3"],
            ayodhya: ["a1", "a2", "a3"]
        };

        // Function to populate the PIN options based on the selected city
        function populatePins() {
            var citySelect = document.getElementById("city");
            var pinSelect = document.getElementById("pin");
            var selectedCity = citySelect.value;

            // Clear existing options
            pinSelect.innerHTML = "";

            if (selectedCity !== "") {
                // Get the pins for the selected city
                var pins = cityPins[selectedCity];

                // Create new option elements and append them to the PIN select
                for (var i = 0; i < pins.length; i++) {
                    var option = document.createElement("option");
                    option.value = pins[i];
                    option.text = pins[i];
                    pinSelect.appendChild(option);
                }
            }
        }

        // Event listener to call the populatePins function when the city selection changes
        document.getElementById("city").addEventListener("change", populatePins);

        // Display the selected city and PIN when the button is clicked
        document.getElementById("displayBtn").addEventListener("click", function () {
            var citySelect = document.getElementById("city");
            var pinSelect = document.getElementById("pin");
            var selectedCity = citySelect.value;
            var selectedPin = pinSelect.value;

            if (selectedCity !== "" && selectedPin !== "") {
                var resultDiv = document.getElementById("result");
                resultDiv.innerHTML = "Selected City: " + selectedCity + "<br/>PIN: " + selectedPin;
            }
        });

   