// ========================== //
// SOCIAL MEDIA IMAGE MAKER
// ========================== //

// There's a lot of console output, so best to clear after each update
console.clear();

// -------------------------------------------- //
// GLOBAL VALUES

const fontStackDefault = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif"
const fontStackHelvetica = "'Helvetica Neue',Helvetica,Arial"
const fontStackSerif = "ui-serif,'Palatino Linotype', Palatino, Palladio, 'URW Palladio L', 'Book Antiqua', Baskerville, 'Bookman Old Style', 'Bitstream Charter', 'Nimbus Roman No9 L', Garamond, 'Apple Garamond', 'ITC Garamond Narrow', 'New Century Schoolbook', 'Century Schoolbook', 'Century Schoolbook L', Georgia, serif"
const fontStackMono = "ui-monospace,'SFMono-Regular',Consolas,'Liberation Mono',Menlo,Courier,monospace"

const color = {};
	color.white = "FFFFFF";
	color.black = "000000";
	color.blue = "007AFF";
	color.darkblue = "2B22AA";
	color.violet = "7F00FF";
	color.purple = "C643FC";
	color.cyan = "009FE3";
	color.magenta = "E6007E";
	color.yellow = "FFD700";
	color.red = "C90000";
	color.green = "0BD318";
	color.orange = "FF5E3A";

const defaultText = {}
	defaultText.quoteBody = "If people knew how hard I***had to work to gain my ***mastery, it would not seem ***so wonderful at all.";
	defaultText.quoteFooter = "– Michelangelo.";
	defaultText.vennTitle = "A venn diagram to show...";
	defaultText.vennFooter = "made with Michelangelo";
	defaultText.vennTextSetA = "Set A";
	defaultText.vennTextSetB = "Set B";
	defaultText.vennTextSetC = "Set C";
	defaultText.vennTextIntersectionAnB = "A ∩ B";
	defaultText.vennTextIntersectionAnC = "A ∩ C";
	defaultText.vennTextIntersectionBnC = "B ∩ C";
	defaultText.vennTextIntersectionAnBnC = "A ∩ B ∩ C"

// -------------------------------------------- //
// SET UP
// -------------------------------------------- //

function michelangelo() {

	// This runs on page load, and populates the default values for the
	// image maker. These styles are overriden when UI elements are
	// interacted with
	
	// Get all of the options the user has selected
	var formFields = getFormFields(imageSize = true, imageDesign = true, vennLayout = true, backgroundStyles = true, textTypeface = true, textWeight = true, textSize = true, textColor = true, textFields = true);

	var imageSize = setImageSizes(formFields.imageSize);
	var imageDesign = setImageDesign(formFields.imageDesign);
	var vennLayout = setVennLayout(formFields.vennLayout);
	var backgroundStyles = setBackgroundStyles(formFields.backgroundStyles, formFields.backgroundDirection);
	var textTypeface = setTextTypeface(formFields.textTypeface);
	var textWeight = setTextWeight(formFields.textWeight);
	var textSize = setTextSize(formFields.textSize);
	var textColor = setTextColor(formFields.textColor);
	var quoteTextFields = setQuoteTextFields(formFields.textFields);
	var vennTextFields = setVennTextFields(formFields.textFields);

	var imageStyles = getAllImageSettings(imageSize, imageDesign, vennLayout, backgroundStyles, textTypeface, textWeight, textSize, textColor, quoteTextFields, vennTextFields);

	generateImage(imageStyles);

}

// -------------------------------------------- //
// GET FORM FIELDS
// -------------------------------------------- //

function getFormFields(
	imageSize = true, 
	imageDesign = true,
	vennLayout = true,
	backgroundStyles = true,
	textTypeface = true,
	textWeight = true,
	textSize = true,
	textColor = true,
	textFields = true
) {

	// -------------------------------------------- //
	// GET FORM FIELDS
	// This function gets the current value of any form field

	var formFields = {}

	// -------------------------------------------- //
	// GET IMAGE SIZE CHOICE

	if (imageSize == true) {
		radios = document.getElementsByName('radio--image-size');
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				// do whatever you want with the checked radio
				formFields.imageSize = radios[i].value;
				// only one radio can be logically checked, don't check the rest
				break;
			}
		}
	}

	// -------------------------------------------- //
	// GET IMAGE DESIGN CHOICE

	if (imageDesign == true) {
		radios = document.getElementsByName('radio--image-design');
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				// do whatever you want with the checked radio
				formFields.imageDesign = radios[i].value;
				// only one radio can be logically checked, don't check the rest
				break;
			}
		}
	}

	// -------------------------------------------- //
	// GET VENN LAYOUT CHOICE

	if (vennLayout == true) {
		radios = document.getElementsByName('radio--venn-layout');
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				// do whatever you want with the checked radio
				formFields.vennLayout = radios[i].value;
				// only one radio can be logically checked, don't check the rest
				break;
			}
		}
	}
	
	// -------------------------------------------- //
	// GET BACKGROUND STYLES CHOICE

	if (backgroundStyles == true) {
		radios = document.getElementsByName('radio--background');
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				// do whatever you want with the checked radio
				formFields.backgroundStyles = radios[i].value;
				// only one radio can be logically checked, don't check the rest
				break;
			}
		}

		radios = document.getElementsByName('radio--background-direction');
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				// do whatever you want with the checked radio
				formFields.backgroundDirection = radios[i].value;
				// only one radio can be logically checked, don't check the rest
				break;
			}
		}
	}
	
	// -------------------------------------------- //
	// GET TYPEFACE CHOICE

	if (textTypeface == true) {
		radios = document.getElementsByName('radio--typeface');
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				// do whatever you want with the checked radio
				formFields.textTypeface = radios[i].value;
				// only one radio can be logically checked, don't check the rest
				break;
			}
		}
	}
	
	// -------------------------------------------- //
	// GET TEXT WEIGHT CHOICE

	if (textWeight == true) {
		radios = document.getElementsByName('radio--text-weight');
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				// do whatever you want with the checked radio
				formFields.textWeight = radios[i].value;
				// only one radio can be logically checked, don't check the rest
				break;
			}
		}
	}
	
	// -------------------------------------------- //
	// GET TEXT SIZE CHOICE

	if (textSize == true) {
		radios = document.getElementsByName('radio--text-size');
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				// do whatever you want with the checked radio
				formFields.textSize = radios[i].value;
				// only one radio can be logically checked, don't check the rest
				break;
			}
		}
	}
	
	// -------------------------------------------- //
	// GET TEXT COLOUR CHOICE
	// Note: code spells colour without the 'u', because coding isn't in English

	if (textColor == true) {
		radios = document.getElementsByName('radio--text-color');
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				// do whatever you want with the checked radio
				formFields.textColor = radios[i].value;
				// only one radio can be logically checked, don't check the rest
				break;
			}
		}
	}
	
	// -------------------------------------------- //
	// GET BODY TEXT

	if (textFields == true) {
		formFields.textFields = {
			// Quote text inputs
			quoteBody: document.getElementById("quote--text--body").value,
			quoteFooter: document.getElementById("quote--text--footer").value,
			// Venn text inputs
			vennTitle: document.getElementById("venn--text--title").value,
			vennFooter: document.getElementById("venn--text--footer").value,
			vennTextSetA: document.getElementById("venn--text--a").value,
			vennTextSetB: document.getElementById("venn--text--b").value,
			vennTextSetC: document.getElementById("venn--text--c").value,
			vennTextIntersectionAnB: document.getElementById("venn--text--a-n-b").value,
			vennTextIntersectionAnC: document.getElementById("venn--text--a-n-c").value,
			vennTextIntersectionBnC: document.getElementById("venn--text--b-n-c").value,
			vennTextIntersectionAnBnC: document.getElementById("venn--text--a-n-b-n-c").value
		}
	}
	
	// -------------------------------------------- //
	// RETURN ALL THE VALUES

	return formFields;

}

// -------------------------------------------- //
// SET IMAGE SIZE
// -------------------------------------------- //

function setImageSizes(formValue) {

	// This function contains default image sizes
	// for all image formats the image maker can
	// produce.

	var imageSize = {}
		imageSize.value = formValue;

	if (formValue == "twitter") {
		imageSize.width = 1200;
		imageSize.height = 675;
	} else if (formValue == "facebook") {
		imageSize.width = 1200;
		imageSize.height = 630;
	} else if (formValue == "instagram-grid") {
		imageSize.width = 1080;
		imageSize.height = 1080;
	} else if (formValue == "instagram-stories") {
		imageSize.width = 1080;
		imageSize.height = 1920;
	}


	if (imageSize.width > imageSize.height) {
		imageSize.padding = imageSize.height * 0.05;
	} else {
		imageSize.padding = imageSize.width * 0.05;
	}

	imageSize.quoteXY = [imageSize.padding, imageSize.padding];
	imageSize.footerXY = [imageSize.width - imageSize.padding, imageSize.height - imageSize.padding];

	imageSize.vennTitleXY = [imageSize.padding, imageSize.padding];

	return imageSize;
	
}

// -------------------------------------------- //
// SET IMAGE DESIGN
// -------------------------------------------- //

function setImageDesign(formValue) {

	// This function sets the image design

	var imageDesign = {}
		imageDesign.value = formValue;

	var optionsBoxVennLayout = document.getElementById("options--venn--layout")
	var optionsBoxVennText = document.getElementById("options--venn--text")
	var optionsBoxQuoteText = document.getElementById("options--quote--text")

	if (formValue == "quote") {
		// VENN BOXES
		// Add these classes to hide the boxes
		optionsBoxVennLayout.classList.add("hide");
		optionsBoxVennText.classList.add("hide");
		// Remove these classes to show the boxes
		optionsBoxVennLayout.classList.remove("show");
		optionsBoxVennText.classList.remove("show");
		// QUOTE BOXES
		// Add these classes to hide the boxes		
		optionsBoxQuoteText.classList.add("show");
		// Remove these classes to show the boxes
		optionsBoxQuoteText.classList.remove("hide");
	} else if (formValue == "venn") {
		// VENN BOXES
		// Remove these classes to show the boxes
		optionsBoxVennLayout.classList.remove("hide");
		optionsBoxVennText.classList.remove("hide");
		// Add these classes to show the boxes
		optionsBoxVennLayout.classList.add("show");
		optionsBoxVennText.classList.add("show");
		// QUOTE BOXES
		// Remove these classes to hide the boxes		
		optionsBoxQuoteText.classList.remove("show");
		// Add these classes to show the boxes
		optionsBoxQuoteText.classList.add("hide");
	}

	return imageDesign;
	
}

// -------------------------------------------- //
// SET VENN LAYOUT
// -------------------------------------------- //

function setVennLayout(formValue) {

	// This function sets the venn layout styles

	var vennLayout = {}

		vennLayout.value = formValue;

		var vennTextSetA = document.getElementById("options--venn--text--a");
		var vennTextSetB = document.getElementById("options--venn--text--b");
		var vennTextSetC = document.getElementById("options--venn--text--c");
		var vennTextIntersectionAnB = document.getElementById("options--venn--text--a-n-b");
		var vennTextIntersectionAnC = document.getElementById("options--venn--text--a-n-c");
		var vennTextIntersectionBnC = document.getElementById("options--venn--text--b-n-c");
		var vennTextIntersectionAnBnC = document.getElementById("options--venn--text--a-n-b-n-c");

		if (formValue == "a-not-equal-b") {
			vennLayout.name = "A is not equal to B";

			vennTextSetA.classList.add("show");					//	always show 
			vennTextSetB.classList.add("show");					//	these fields	
			vennTextSetC.classList.add("hide");
			vennTextIntersectionAnB.classList.add("hide");
			vennTextIntersectionAnC.classList.add("hide");
			vennTextIntersectionBnC.classList.add("hide");
			vennTextIntersectionAnBnC.classList.add("hide");

			vennTextSetA.classList.remove("hide");
			vennTextSetB.classList.remove("hide");
			vennTextSetC.classList.remove("show");
			vennTextIntersectionAnB.classList.remove("show");
			vennTextIntersectionAnC.classList.remove("show");
			vennTextIntersectionBnC.classList.remove("show");
			vennTextIntersectionAnBnC.classList.remove("show");

		} else if (formValue == "a-intersection-b") {
			vennLayout.name = "A intersects with B";
	
			vennTextSetA.classList.add("show");					//	always show 
			vennTextSetB.classList.add("show");					//	these fields
			vennTextSetC.classList.add("hide");
			vennTextIntersectionAnB.classList.add("show");
			vennTextIntersectionAnC.classList.add("hide");
			vennTextIntersectionBnC.classList.add("hide");
			vennTextIntersectionAnBnC.classList.add("hide");

			vennTextSetA.classList.remove("hide");
			vennTextSetB.classList.remove("hide");
			vennTextSetC.classList.remove("show");
			vennTextIntersectionAnB.classList.remove("hide");
			vennTextIntersectionAnC.classList.remove("show");
			vennTextIntersectionBnC.classList.remove("show");
			vennTextIntersectionAnBnC.classList.remove("show");

		} else if (formValue == "a-subset-b") {
			vennLayout.name = "A is a subset of B";

			vennTextSetA.classList.add("show");					//	always show 
			vennTextSetB.classList.add("show");					//	these fields	
			vennTextSetC.classList.add("hide");
			vennTextIntersectionAnB.classList.add("hide");
			vennTextIntersectionAnC.classList.add("hide");
			vennTextIntersectionBnC.classList.add("hide");
			vennTextIntersectionAnBnC.classList.add("hide");

			vennTextSetA.classList.remove("hide");
			vennTextSetB.classList.remove("hide");
			vennTextSetC.classList.remove("show");
			vennTextIntersectionAnB.classList.remove("show");
			vennTextIntersectionAnC.classList.remove("show");
			vennTextIntersectionBnC.classList.remove("show");
			vennTextIntersectionAnBnC.classList.remove("show");

		} else if (formValue == "a-intersection-b-intersection-c") {
			vennLayout.name = "A, B and C intersect";
	
			vennTextSetA.classList.add("show");					//	always show 
			vennTextSetB.classList.add("show");					//	these fields
			vennTextSetC.classList.add("show");
			vennTextIntersectionAnB.classList.add("show");
			vennTextIntersectionAnC.classList.add("show");
			vennTextIntersectionBnC.classList.add("show");
			vennTextIntersectionAnBnC.classList.add("show");

			vennTextSetA.classList.remove("hide");
			vennTextSetB.classList.remove("hide");
			vennTextSetC.classList.remove("hide");
			vennTextIntersectionAnB.classList.remove("hide");
			vennTextIntersectionAnC.classList.remove("hide");
			vennTextIntersectionBnC.classList.remove("hide");
			vennTextIntersectionAnBnC.classList.remove("hide");

		}

	console.groupCollapsed("VENN LAYOUT");
	console.log("Venn layout is " + vennLayout.name);
	console.groupEnd();


	return vennLayout;
	
}

// -------------------------------------------- //
// SET BACKGROUND STYLES
// -------------------------------------------- //

function setBackgroundStyles(style, direction) {

	// This function sets the background colours or images

	var backgroundStyles = {}
		backgroundStyles.value = style;

		if (style == "white") {
			backgroundStyles.style = color.white;
			backgroundStyles.type = "solid";
		} else if (style == "black") {
			backgroundStyles.style = color.black;
			backgroundStyles.type = "solid";
		} else if (style == "blue") {
			backgroundStyles.style = color.blue;
			backgroundStyles.type = "solid";
		} else if (style == "purple") {
			backgroundStyles.style = color.purple;
			backgroundStyles.type = "solid";
		} else if (style == "cyan") {
			backgroundStyles.style = color.cyan;
			backgroundStyles.type = "solid";
		} else if (style == "magenta") {
			backgroundStyles.style = color.magenta;
			backgroundStyles.type = "solid";
		} else if (style == "yellow") {
			backgroundStyles.style = color.yellow;
			backgroundStyles.type = "solid";
		} else if (style == "red") {
			backgroundStyles.style = color.red;
			backgroundStyles.type = "solid";
		} else if (style == "green") {
			backgroundStyles.style = color.green;
			backgroundStyles.type = "solid";
		} else if (style == "orange") {
			backgroundStyles.style = color.orange;
			backgroundStyles.type = "solid";
		} else if (style == "rainbow") {
			backgroundStyles.style = [
				color.red,
				color.orange,
				color.yellow,
				color.green,
				color.blue,
				color.darkblue,
				color.violet
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = false;
			backgroundStyles.direction = direction;
		} else if (style == "red-yellow") {
			backgroundStyles.style = [
				color.red,
				color.yellow
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = false;
			backgroundStyles.direction = direction;
		} else if (style == "red-blue") {
			backgroundStyles.style = [
				color.red,
				color.blue
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = false;
			backgroundStyles.direction = direction;
		} else if (style == "red-purple") {
			backgroundStyles.style = [
				color.red,
				color.purple
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = false;
			backgroundStyles.direction = direction;
		} else if (style == "yellow-magenta") {
			backgroundStyles.style = [
				color.yellow,
				color.magenta
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = false;
			backgroundStyles.direction = direction;
		} else if (style == "yellow-blue") {
			backgroundStyles.style = [
				color.yellow,
				color.blue
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = false;
			backgroundStyles.direction = direction;
		} else if (style == "green-blue") {
			backgroundStyles.style = [
				color.green,
				color.blue
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = false;
			backgroundStyles.direction = direction;
		} else if (style == "green-purple") {
			backgroundStyles.style = [
				color.green,
				color.purple
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = false;
			backgroundStyles.direction = direction;
		} else if (style == "purple-orange") {
			backgroundStyles.style = [
				color.purple,
				color.orange
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = false;
			backgroundStyles.direction = direction;
		} else if (style == "magenta-orange") {
			backgroundStyles.style = [
				color.magenta,
				color.orange
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = false;
			backgroundStyles.direction = direction;
		} else if (style == "gilbert-pride") {
			backgroundStyles.style = [
				[
					"#d04b36",
					"#d04b36",
					"#e36511",
					"#e36511",
					"#ffba00",
					"#ffba00",
					"#00b180",
					"#00b180",
					"#147aab",
					"#147aab",
					"#675997",
					"#675997"
				],
				[
					0,
					0.16666,
					0.16666,
					0.33333,
					0.33333,
					0.5,
					0.5,
					0.66666,
					0.66666,
					0.83333,
					0.83333,
					1
				]
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = true;
			backgroundStyles.direction = direction;
		}  else if (style == "modern-gilbert-pride") {
			backgroundStyles.style = [
				[
					"#1d1d1d",
					"#1d1d1d",
					"#8B4513",
					"#8B4513",
					"#d04b36",
					"#d04b36",
					"#e36511",
					"#e36511",
					"#ffba00",
					"#ffba00",
					"#00b180",
					"#00b180",
					"#147aab",
					"#147aab",
					"#675997",
					"#675997"
				],
				[
					0,
					0.125,
					0.125,
					0.25,
					0.25,
					0.375,
					0.375,
					0.5,
					0.5,
					0.625,
					0.625,
					0.75,
					0.75,
					0.875,
					0.875,
					1
				]
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = true;
			backgroundStyles.direction = direction;
		} else if (style == "bi-pride") {
			backgroundStyles.style = [
				[
					"#c1357e",
					"#c1357e",
					"#675997",
					"#675997",
					"#0655a9",
					"#0655a9",
				],
				[
					0,
					0.4,
					0.4,
					0.6,
					0.6,
					1
				]
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = true;
			backgroundStyles.direction = direction;
		} else if (style == "pan-pride") {
			backgroundStyles.style = [
				[
					"#fa5e5b",
					"#fa5e5b",
					"#ffba00",
					"#ffba00",
					"#4fa5c2",
					"#4fa5c2",
				],
				[
					0,
					0.33333,
					0.33333,
					0.66666,
					0.66666,
					1
				]
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = true;
			backgroundStyles.direction = direction;
		} else if (style == "trans-pride") {
			backgroundStyles.style = [
				[
					"#4fa5c2",
					"#4fa5c2",
					"#f587ac",
					"#f587ac",
					"#f9fbfc",
					"#f9fbfc",
					"#f587ac",
					"#f587ac",
					"#4fa5c2",
					"#4fa5c2"
				],
				[
					0,
					0.2,
					0.2,
					0.4,
					0.4,
					0.6,
					0.6,
					0.8,
					0.8,
					1
				]
			]
			backgroundStyles.type = "gradient";
			backgroundStyles.manualStops = true;
			backgroundStyles.direction = direction;
		} else if (style == "custom") {
			var inputCustomBackgroundColor = document.getElementById("background--custom--input");

			if (inputCustomBackgroundColor.value.length == 0) {
				console.info("inputCustomBackgroundColor is EMPTY")
				backgroundStyles.style = color.cyan;
			} else if(inputCustomBackgroundColor.value.length > 0 && inputCustomBackgroundColor.validity.valid == false) {
				console.warn("inputCustomBackgroundColor is INVALID")
				backgroundStyles.style = color.cyan;
			} else if(inputCustomBackgroundColor.value.length > 0) {
				console.log("inputCustomBackgroundColor is NOT EMPTY")
				backgroundStyles.style = inputCustomBackgroundColor.value;
			} else {
				console.warn("inputCustomBackgroundColor is ???")
				backgroundStyles.style = color.cyan;
			}
		}

	console.groupCollapsed("BACKGROUNDS");
		console.log("Background is set to #" + backgroundStyles.style);
	console.groupEnd();

	return backgroundStyles;
	
}

// -------------------------------------------- //
// SET TYPEFACE
// -------------------------------------------- //

function setTextTypeface(formValue) {

	// This function sets the typeface for all text

	var textTypeface = {}
		textTypeface.value = formValue;

		if (formValue == "system-default") {
			textTypeface.font = fontStackDefault;
		} else if (formValue == "sans-serif") {
			textTypeface.font = fontStackHelvetica;
		} else if (formValue == "serif")  {
			textTypeface.font = fontStackSerif;
		} else if (formValue == "mono") {
			textTypeface.font = fontStackMono;
		} else if (formValue == "custom") {
			var inputCustomTypeface = document.getElementById("typeface--custom--input");
			textTypeface.font = inputCustomTypeface.value;

			if (inputCustomTypeface.value.length == 0) {
				console.info("inputCustomTypeface is EMPTY");
				textTypeface.font = fontStackDefault;
			} else if(inputCustomTypeface.value.length > 0 && inputCustomTypeface.validity.valid == false) {
				console.warn("inputCustomTypeface is INVALID");
				textTypeface.font = fontStackDefault;
			} else if(inputCustomTypeface.value.length > 0) {
				console.log("inputCustomTypeface is NOT EMPTY");
				textTypeface.font = "'" + inputCustomTypeface.value + "'";
			} else {
				console.warn("inputCustomTypeface is ???");
				textTypeface.font = fontStackDefault;
			}
		}

	console.groupCollapsed("FONT FAMILY");
		console.log("font-family is set to " + textTypeface.font);
	console.groupEnd();

	return textTypeface;
	
}

// -------------------------------------------- //
// SET TEXT WEIGHT
// -------------------------------------------- //

function setTextWeight(formValue) {

	// This function sets the font weight value

	var textWeight = {}
		textWeight.value = formValue;

		textWeight.body = textWeight.value;
		textWeight.vennTitle = textWeight.value;
		textWeight.vennLabels = textWeight.value;

		if (textWeight.body == "lighter") {
			textWeight.footer = "lighter";
			textWeight.vennFooter = "lighter";
		} else {
			textWeight.footer = "normal";
			textWeight.vennFooter = "normal";
		}

		console.groupCollapsed("FONT WEIGHTS");
			console.group("Quote font weights");
				console.log("Body font-weight is set to " + textWeight.body);
				console.log("Footer font-weight is set to " + textWeight.footer);
			console.groupEnd();
			console.group("Venn font weights");
				console.log("Venn title font-weight is set to " + textWeight.vennTitle);		
				console.log("Venn footer font-weight is set to " + textWeight.vennFooter);
				console.log("Venn labels font-weight is set to " + textWeight.vennLabels);
			console.groupEnd();
		console.groupEnd();

	return textWeight;
	
}

// -------------------------------------------- //
// SET TEXT SIZE
// -------------------------------------------- //

function setTextSize(formValue) {

	// This function sets the font size in px

	var textSize = {}
		textSize.value = formValue;

		if (formValue == "small") {
			textSize.body = 60;
			textSize.footer = 30;
			textSize.vennTitle = 30;
			textSize.vennFooter = 20;
			textSize.vennLabels = 20;
		} else if (formValue == "medium") {
			textSize.body = 75;
			textSize.footer = 38;
			textSize.vennTitle = 40;
			textSize.vennFooter = 30;
			textSize.vennLabels = 30;
		} else if (formValue == "large") {
			textSize.body = 90;
			textSize.footer = 45;
			textSize.vennTitle = 50;
			textSize.vennFooter = 40;
			textSize.vennLabels = 40;
		} else if (formValue == "custom") {
			var inputCustomTextSize = document.getElementById("text-size--custom--input");

			if (inputCustomTextSize.value.length == 0) {
				console.info("inputCustomTextSize is EMPTY");
				textSize.body = 75;
				textSize.footer = 38;
				textSize.vennTitle = 40;
				textSize.vennFooter = 30;
				textSize.vennLabels = 30;
			} else if(inputCustomTextSize.value.length > 0 && inputCustomTextSize.validity.valid == false) {
				console.warn("inputCustomTextSize is INVALID");
				textSize.body = 75;
				textSize.footer = 38;
				textSize.vennTitle = 40;
				textSize.vennFooter = 30;
				textSize.vennLabels = 30;
			} else if(inputCustomTextSize.value.length > 0) {
				console.log("inputCustomTextSize is NOT EMPTY");
				textSize.body = inputCustomTextSize.value;
				textSize.footer = textSize.body * 0.5;
				textSize.vennTitle = inputCustomTextSize.value;
				textSize.vennFooter = textSize.vennTitle * 0.75;
				textSize.vennLabels = textSize.vennTitle * 0.75;
			} else {
				console.warn("inputCustomTextSize is ???");
				textSize.body = 75;
				textSize.footer = 38;
				textSize.vennTitle = 40;
				textSize.vennFooter = 30;
				textSize.vennLabels = 30;
			}
		}

		console.groupCollapsed("FONT SIZES");
			console.group("Quote font sizes");
				console.log("Body font-size is set to " + textSize.body + "px");
				console.log("Footer font-size is set to " + textSize.footer + "px");
			console.groupEnd();
			console.group("Venn font sizes");
				console.log("Title font-size is set to " + textSize.vennTitle + "px");
				console.log("Footer font-size is set to " + textSize.vennFooter + "px");
				console.log("Labels font-size is set to " + textSize.vennLabels + "px");
			console.groupEnd();
		console.groupEnd();
		

	return textSize;
	
}

// -------------------------------------------- //
// SET TEXT COLOUR
// -------------------------------------------- //

function setTextColor(formValue) {

	// This function sets the text color

	var textColor = {}
		textColor.value = formValue;

		if (formValue == "white") {
			textColor.hex = color.white;
		} else if (formValue == "black") {
			textColor.hex = color.black;
		} else if (formValue == "custom") {
			var inputCustomTextColor = document.getElementById("text-color--custom--input");

			if (inputCustomTextColor.value.length == 0) {
				console.info("inputCustomTextColor is EMPTY");
				textColor.hex = color.black;
			} else if(inputCustomTextColor.value.length > 0 && inputCustomTextColor.validity.valid == false) {
				console.warn("inputCustomTextColor is INVALID")
				textColor.hex = color.black;
			} else if(inputCustomTextColor.value.length > 0) {
				console.log("inputCustomTextColor is NOT EMPTY");
				textColor.hex = inputCustomTextColor.value;
			} else {
				console.warn("inputCustomTextColor is ???");
				textColor.hex = color.black;
			}
		}

		console.groupCollapsed("TEXT COLOURS");
			console.log("Color is set to #" + textColor.hex);
		console.groupEnd();

	return textColor;
	
}


// -------------------------------------------- //
// GENERIC FUNCTIONS
// -------------------------------------------- //


function formatVariable(format, twitter, facebook, grid, stories) {

	// --------------------------------------------------- //
	// SET A VARIABLE DYNAMICALLY DEPENDING ON IMAGE SIZE

	if (format == "twitter") { 	var formatDependentVariable = twitter	} 
	else if (format == "facebook") { 	var formatDependentVariable = facebook	} 
	else if (format == "instagram-grid") { 	var formatDependentVariable = grid	} 
	else if (format == "instagram-stories") { 	var formatDependentVariable = stories	} 

	return formatDependentVariable;

}

function switchToCustomRadio(radioID) {

	// -------------------------------------------- //
	// CUSTOM RADIO SELECT
	// Some fields are text inputs as part of radio button groups.
	// Add this to focusin="" on text inputs and it will select the 'custom'
	// radio button when you select the text box next to it.

	var customRadio = document.getElementById(radioID);
	customRadio.checked = true;
	
}

function showSection(sectionID) {
	var section = document.getElementById(sectionID);
	section.classList.add("show");
	section.classList.remove("hide");
}

function hideSection(sectionID) {
	var section = document.getElementById(sectionID);
	section.classList.add("hide");
	section.classList.remove("show");
}

// -------------------------------------------- //
// SET TEXT VALUES
// -------------------------------------------- //

function setQuoteTextFields(formValue) {

	// Quote text inputs
	var quoteBody = formValue["quoteBody"];
	var quoteFooter = formValue["quoteFooter"];

	console.groupCollapsed("TEXT INPUTS")
	console.group("Quote text inputs");

	var quoteText = {}
		if (quoteBody.length == 0) {
			console.info("quoteBody is EMPTY");
			quoteText.body = defaultText.quoteBody;
		} else if(quoteBody.length > 0) {
			console.log("quoteBody is NOT EMPTY");
			quoteText.body = quoteBody;
		} else {
			console.warn("quoteBody ERROR");
			quoteText.body = "quoteBody is ???";
		}

		if (quoteFooter.length == 0) {
			console.info("quoteFooter is EMPTY");
			quoteText.footer = defaultText.quoteFooter;
		} else if(quoteFooter.length > 0) {
			console.log("quoteFooter is NOT EMPTY");
			quoteText.footer = quoteFooter;
		} else {
			console.warn("quoteFooter ERROR");
			quoteText.footer = "quoteFooter is ???";
		}

		console.log("Body text is set to: " + quoteText.body);
		console.log("Footer text is set to: " + quoteText.footer);

	console.groupEnd();
		return quoteText;

}

function setVennTextFields(formValue) {

	// Venn text inputs
	var vennTitle = formValue["vennTitle"];
	var vennFooter = formValue["vennFooter"];
	var vennTextSetA = formValue["vennTextSetA"];
	var vennTextSetB = formValue["vennTextSetB"];
	var vennTextSetC = formValue["vennTextSetC"];
	var vennTextIntersectionAnB = formValue["vennTextIntersectionAnB"];
	var vennTextIntersectionAnC = formValue["vennTextIntersectionAnC"];
	var vennTextIntersectionBnC = formValue["vennTextIntersectionBnC"];
	var vennTextIntersectionAnBnC = formValue["vennTextIntersectionAnBnC"];

	console.group("Venn text inputs");

	var vennText = {}
		if (vennTitle.length == 0) {
			console.info("vennTitle is EMPTY");
			vennText.title = defaultText.vennTitle;
		} else if(vennTitle.length > 0) {
			console.log("vennTitle is NOT EMPTY");
			vennText.title = vennTitle;
		} else {
			console.warn("vennTitle ERROR");
			vennText.title = "vennTitle is ???";
		}
		
		if (vennFooter.length == 0) {
			console.info("vennFooter is EMPTY");
			vennText.footer = defaultText.vennFooter;
		} else if(vennFooter.length > 0) {
			console.log("vennFooter is NOT EMPTY");
			vennText.footer = vennFooter;
		} else {
			console.warn("vennFooter ERROR");
			vennText.footer = "vennFooter is ???";
		}
		
		if (vennTextSetA.length == 0) {
			console.info("vennTextSetA is EMPTY");
			vennText.setA = defaultText.vennTextSetA;
		} else if(vennTextSetA.length > 0) {
			console.log("vennTextSetA is NOT EMPTY");
			vennText.setA = vennTextSetA;
		} else {
			console.warn("vennTextSetA ERROR");
			vennText.setA = "vennTextSetA is ???";
		}
		
		if (vennTextSetB.length == 0) {
			console.info("vennTextSetB is EMPTY");
			vennText.setB = defaultText.vennTextSetB;
		} else if(vennTextSetB.length > 0) {
			console.log("vennTextSetB is NOT EMPTY");
			vennText.setB = vennTextSetB;
		} else {
			console.warn("vennTextSetB ERROR");
			vennText.setB = "vennTextSetB is ???";
		}
		
		if (vennTextSetC.length == 0) {
			console.info("vennTextSetC is EMPTY");
			vennText.setC = defaultText.vennTextSetC;
		} else if(vennTextSetC.length > 0) {
			console.log("vennTextSetC is NOT EMPTY");
			vennText.setC = vennTextSetC;
		} else {
			console.warn("vennTextSetC ERROR");
			vennText.setC = "vennTextSetC is ???";
		}
		
		if (vennTextIntersectionAnB.length == 0) {
			console.info("vennTextIntersectionAnB is EMPTY");
			vennText.intersectionAnB = defaultText.vennTextIntersectionAnB;
		} else if(vennTextIntersectionAnB.length > 0) {
			console.log("vennTextIntersectionAnB is NOT EMPTY");
			vennText.intersectionAnB = vennTextIntersectionAnB;
		} else {
			console.warn("vennTextIntersectionAnB ERROR");
			vennText.intersectionAnB = "vennTextIntersectionAnB is ???";
		}
		
		if (vennTextIntersectionAnC.length == 0) {
			console.info("vennTextIntersectionAnC is EMPTY");
			vennText.intersectionAnC = defaultText.vennTextIntersectionAnC;
		} else if(vennTextIntersectionAnC.length > 0) {
			console.log("vennTextIntersectionAnC is NOT EMPTY");
			vennText.intersectionAnC = vennTextIntersectionAnC;
		} else {
			console.warn("vennTextIntersectionAnC ERROR");
			vennText.intersectionAnC = "vennTextIntersectionAnC is ???";
		}
		
		if (vennTextIntersectionBnC.length == 0) {
			console.info("vennTextIntersectionBnC is EMPTY");
			vennText.intersectionBnC = defaultText.vennTextIntersectionBnC;
		} else if(vennTextIntersectionBnC.length > 0) {
			console.log("vennTextIntersectionBnC is NOT EMPTY");
			vennText.intersectionBnC = vennTextIntersectionBnC;
		} else {
			console.warn("vennTextIntersectionBnC ERROR");
			vennText.intersectionBnC = "vennTextIntersectionBnC is ???";
		}
		
		if (vennTextIntersectionAnBnC.length == 0) {
			console.info("vennTextIntersectionAnBnC is EMPTY");
			vennText.intersectionAnBnC = defaultText.vennTextIntersectionAnBnC;
		} else if(vennTextIntersectionAnBnC.length > 0) {
			console.log("vennTextIntersectionAnBnC is NOT EMPTY");
			vennText.intersectionAnBnC = vennTextIntersectionAnBnC;
		} else {
			console.warn("vennTextIntersectionAnBnC ERROR");
			vennText.intersectionAnBnC = "vennTextIntersectionAnBnC is ???";
		}

		console.log("Title text is set to: " + vennText.title);
		console.log("Footer text is set to: " + vennText.footer);
		console.log("Set A text is set to: " + vennText.setA);
		console.log("Set B text is set to: " + vennText.setB);
		console.log("Set C text is set to: " + vennText.setC);
		console.log("A intersection B text is set to: " + vennText.intersectionAnB);
		console.log("A intersection C text is set to: " + vennText.intersectionAnC);
		console.log("B intersection C text is set to: " + vennText.intersectionBnC);
		console.log("A intersection B intersection C text is set to: " + vennText.intersectionAnBnC);

		console.groupEnd();
		console.groupEnd();

		return vennText;
	
}

// -------------------------------------------- //
// SET STYLES
// -------------------------------------------- //

function getAllImageSettings(imageSize, imageDesign, vennLayout, backgroundStyles, textTypeface, textWeight, textSize, textColor, quoteText, vennText) {

	// This function sets the variables needed for each design.

	var settings = {}
		settings.format = [imageSize.value, imageSize.width, imageSize.height, imageSize.quoteXY, imageSize.footerXY]

		settings.design = imageDesign.value;

		settings.vennLayout = vennLayout.value;

		settings.backgroundType = backgroundStyles.type;
		settings.backgroundDirection = backgroundStyles.direction;
		settings.backgroundManualStops = backgroundStyles.manualStops;
		settings.backgroundColor = backgroundStyles.style;

		// --------------------------------------------
		// All text settings for quote images
		// Settings for quote body text
		settings.quoteBody = [quoteText.body, imageSize.quoteXY, textWeight.body, textSize.body, textTypeface.font, textColor.hex];
		// Settings for quote footer
		settings.quoteFooter = [quoteText.footer, imageSize.footerXY, textWeight.footer, textSize.footer, textTypeface.font, textColor.hex];


		// --------------------------------------------
		// All text settings for venn images
		settings.vennFontSettings = [[textWeight.vennTitle, textWeight.vennFooter, textWeight.vennLabels], [textSize.vennTitle, textSize.vennFooter, textSize.vennLabels], textTypeface.font, textColor.hex] // font-weight, font-size, font-family, color
		// Settings for venn title
		settings.vennTitle = [vennText.title, imageSize.vennTitleXY, textWeight.vennTitle, textSize.vennTitle];
		// Settings for venn footer
		settings.vennFooter = [vennText.footer, imageSize.footerXY, textWeight.footer, textSize.footer];
		// Settings for venn labels
		settings.vennLabels = [vennText.setA, vennText.setB, vennText.setC, vennText.intersectionAnB, vennText.intersectionAnC, vennText.intersectionBnC, vennText.intersectionAnBnC];
	
		return settings;
	
}

function multilineText(text, ctx) {
	
	var lines = text[0].split("***");

	var x = text[1][0]; // These are the X coordinates set by imageSize.[variable]XY
	var y = text[1][1]; // These are the Y coordinates set by imageSize.[variable]XY

	console.log("Multiline text: " + text[0]);

	for (var i = 0; i < lines.length; i++) {
		ctx.fillText(lines[i], x, y);
		y += (text[3] * 1.2);
	}

	console.log("Text drawn starting at " + text[1][0] + ", " + text[1][1])

}

// -------------------------------------------- //
// DRAW THE BACKGROUNDS
// -------------------------------------------- //

function drawBackground(settings, ctx) {

	ctx.clearRect(0, 0, canvas.width, canvas.height)

	if (settings.backgroundType == "gradient") {

		if (settings.backgroundDirection == "diagonal") {
			var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
		} else if (settings.backgroundDirection == "vertical" ) {
			var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
		} else if (settings.backgroundDirection == "horizontal" ) {
			var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
		}

		var countColors = settings.backgroundColor.length;
		var countManualColors = settings.backgroundColor[0].length;
		var stops = countColors - 1

		if (settings.backgroundManualStops == true) {
			for (i = 0; i < countManualColors; i++) {
				console.log(settings.backgroundColor[1][i] + " " + settings.backgroundColor[0][i])
				gradient.addColorStop(settings.backgroundColor[1][i], settings.backgroundColor[0][i]);
			}
		} else {
			gradient.addColorStop(0, settings.backgroundColor[0]);
			for (i = 1; i < stops; i++) {
				var stop = i * (1 / stops)
				gradient.addColorStop(stop, settings.backgroundColor[i]);
			}
			gradient.addColorStop(1, settings.backgroundColor[countColors - 1]); // Minus 1 because arrays are zero-based
		}

		ctx.fillStyle = gradient;

	}

	if (settings.backgroundType == "solid") {
		ctx.fillStyle = settings.backgroundColor;
	}

	ctx.fillRect(0, 0, canvas.width, canvas.height);

}

// -------------------------------------------- //
// DRAW THE QUOTE TEXT
// -------------------------------------------- //

function drawQuote(settings, ctx) {

	ctx.textBaseline = "top";
	ctx.textAlign = "left";
	ctx.font = settings.quoteBody[2] + " " + settings.quoteBody[3] +  "px " + settings.quoteBody[4];
	ctx.fillStyle = settings.quoteBody[5];
	multilineText(settings.quoteBody, ctx);

	ctx.textBaseline = "bottom";
	ctx.textAlign = "right";
	ctx.font = settings.quoteFooter[2] + " " + settings.quoteFooter[3] +  "px " + settings.quoteFooter[4];
	ctx.fillStyle = settings.quoteFooter[5];

	multilineText(settings.quoteFooter, ctx);

}

// -------------------------------------------- //
// SET VENN DIAGRAM
// -------------------------------------------- //

function setupVennDiagram(settings) {

	// This function sets the variables needed for each design.

	var drawVenn = {}
		drawVenn.format = settings.format[0]; // imageSize.value
		drawVenn.width	= settings.format[1]; // imageSize.width
		drawVenn.height	= settings.format[2]; // imageSize.height
		drawVenn.layout = settings.vennLayout; // vennLayout.value

		drawVenn.labelA = settings.vennLabels[0];
		drawVenn.labelB = settings.vennLabels[1];
		drawVenn.labelC = settings.vennLabels[2];
		drawVenn.labelAnB = settings.vennLabels[3];
		drawVenn.labelAnC = settings.vennLabels[4];
		drawVenn.labelBnC = settings.vennLabels[5];
		drawVenn.labelAnBnC = settings.vennLabels[6];

		var f = drawVenn.format;
		var w = drawVenn.width;
		var h = drawVenn.height;

		if (drawVenn.layout == "a-not-equal-b") {		

			drawVenn.vennSetA = [
				formatVariable(f, w * 0.3, w * 0.3, w * 0.28, w * 0.28), 
				formatVariable(f, h * 0.5, h * 0.5, h * 0.5, h * 0.5),
				formatVariable(f, h * 0.28, h * 0.28, w * 0.21, w * 0.21),
			]; // x, y, radius
		
			drawVenn.vennSetB = [
				formatVariable(f, w * 0.7, w * 0.7, w * 0.72, w * 0.72), 
				formatVariable(f, h * 0.5, h * 0.5, h * 0.5, h * 0.5),
				formatVariable(f, h * 0.28, h * 0.28, w * 0.21, w * 0.21),
			]; // x, y, radius

			drawVenn.vennSetALabel = [
				drawVenn.labelA, 
				formatVariable(f, w * 0.3, w * 0.3, w * 0.28, w * 0.28),
				formatVariable(f, h * 0.5, h * 0.5, h * 0.5, h * 0.5)
			]; // label, x, y
				
			drawVenn.vennSetBLabel = [
				drawVenn.labelB, 
				formatVariable(f, w * 0.7, w * 0.7, w * 0.72, w * 0.72),
				formatVariable(f, h * 0.5, h * 0.5, h * 0.5, h * 0.5),
			]; // label, x, y


		} else if (drawVenn.layout == "a-intersection-b") {

			drawVenn.vennSetA = [
				formatVariable(f, w * 0.37, 	w * 0.38, 	w * 0.3, 	w * 0.3), // X coordinate
				formatVariable(f, h * 0.5, 		h * 0.5, 	h * 0.5, 	h * 0.5), // Y coordinate
				formatVariable(f, h * 0.28, 	h * 0.28, 	h * 0.27, 	w * 0.28), // Radius
			]; // x, y, radius
		
			drawVenn.vennSetB = [
				formatVariable(f, w * 0.63, 	w * 0.62, 	w * 0.7, 	w * 0.7), 
				formatVariable(f, h * 0.5, 		h * 0.5, 	h * 0.5, 	h * 0.5),
				formatVariable(f, h * 0.28, 	h * 0.28, 	h * 0.27, 	w * 0.28),
			]; // x, y, radius

			drawVenn.vennSetALabel = [
				drawVenn.labelA, 
				formatVariable(f, w * 0.425, 	w * 0.425, 	w * 0.325, 	w * 0.325),
				formatVariable(f, h * 0.5, 		h * 0.5, 	h * 0.5, 	h * 0.5)
			]; // label, x, y
				
			drawVenn.vennSetBLabel = [
				drawVenn.labelB, 
				formatVariable(f, w * 0.575,	w * 0.575, 	w * 0.675, 	w * 0.675),
				formatVariable(f, h * 0.5, 		h * 0.5, 	h * 0.5, 	h * 0.5),
			]; // label, x, y
				
			drawVenn.vennAnBLabel = [
				drawVenn.labelAnB, 
				formatVariable(f, w * 0.5, 	w * 0.5, 	w * 0.5, 	w * 0.5),
				formatVariable(f, h * 0.85, h * 0.85, 	h * 0.85, 	h * 0.75),
			]; // label, x, y

		} else if (drawVenn.layout == "a-subset-b") {

			drawVenn.vennSetA = [
				formatVariable(f, w * 0.425, 	w * 0.425, 	w * 0.32, 	w * 0.25), // X coordinate
				formatVariable(f, h * 0.5, 		h * 0.5, 	h * 0.5, 	h * 0.5), // Y coordinate
				formatVariable(f, h * 0.125, 		h * 0.125, 	w * 0.15, 	w * 0.2), // Radius
			]; // x, y, radius
		
			drawVenn.vennSetB = [
				formatVariable(f, w * 0.5, 		w * 0.5, 	w * 0.5, 	w * 0.5), 
				formatVariable(f, h * 0.5, 		h * 0.5, 	h * 0.5, 	h * 0.5),
				formatVariable(f, h * 0.3, 		h * 0.3, 	w * 0.35, 	w * 0.48),
			]; // x, y, radius

			drawVenn.vennSetALabel = [
				drawVenn.labelA, 
				formatVariable(f, w * 0.25, 	w * 0.25, 	w * 0.4, 	w * 0.35),
				formatVariable(f, h * 0.5, 		h * 0.5, 	h * 0.5, 	h * 0.5)
			]; // label, x, y
				
			drawVenn.vennSetBLabel = [
				drawVenn.labelB, 
				formatVariable(f, w * 0.75, 	w * 0.75, 	w * 0.55, 	w * 0.55),
				formatVariable(f, h * 0.5, 		h * 0.5, 	h * 0.5, 	h * 0.5),
			]; // label, x, y

		} else if (drawVenn.layout == "a-intersection-b-intersection-c") {
		
			// 	drawVenn.vennAnBnCLabel = [drawVenn.labelAnBnC, (drawVenn.width * 0.5) + (drawVenn.vennSetA[2] * 2), drawVenn.height * 0.5]; // label, x, y

			// 	drawVenn.vennAnBnCLabel = [drawVenn.labelAnBnC, (drawVenn.width * 0.5) + (drawVenn.vennSetC[2] * 2), drawVenn.height * 0.5]; // label, x, y

			// }

			drawVenn.vennSetA = [
				formatVariable(f, w * 0.4, 		w * 0.4125, 	w * 0.35, 	w * 0.35), // X coordinate
				formatVariable(f, h * 0.42, 	h * 0.45, 	h * 0.4, 	h * 0.4), // Y coordinate
				formatVariable(f, h * 0.23, 	h * 0.23, 	w * 0.2, 	w * 0.23), // Radius
			]; // x, y, radius
		
			drawVenn.vennSetB = [
				formatVariable(f, w * 0.6, 		w * 0.5875, 	w * 0.65, 	w * 0.65), // X coordinate
				formatVariable(f, h * 0.42, 	h * 0.45, 	h * 0.4, 	h * 0.4), // Y coordinate
				formatVariable(f, h * 0.23, 	h * 0.23, 	w * 0.2, 	w * 0.23), // Radius
			]; // x, y, radius
		
			drawVenn.vennSetC = [
				formatVariable(f, w * 0.5, 		w * 0.5, 	w * 0.5, 	w * 0.5), 
				formatVariable(f, h * 0.725,		h * 0.725, 	h * 0.65, 	h * 0.55),
				formatVariable(f, h * 0.23, 	h * 0.23, 	w * 0.2, 	w * 0.23),
			]; // x, y, radius

			drawVenn.vennSetALabel = [
				drawVenn.labelA, 
				formatVariable(f, drawVenn.vennSetA[0], drawVenn.vennSetA[0], drawVenn.vennSetA[0], drawVenn.vennSetA[0]),
				formatVariable(f, drawVenn.vennSetA[1], drawVenn.vennSetA[1], drawVenn.vennSetA[1], drawVenn.vennSetA[1])
			]; // label, x, y
				
			drawVenn.vennSetBLabel = [
				drawVenn.labelB, 
				formatVariable(f, drawVenn.vennSetB[0], drawVenn.vennSetB[0], drawVenn.vennSetB[0], drawVenn.vennSetB[0]),
				formatVariable(f, drawVenn.vennSetB[1], drawVenn.vennSetB[1], drawVenn.vennSetB[1], drawVenn.vennSetB[1])
			]; // label, x, y
				
			drawVenn.vennSetCLabel = [
				drawVenn.labelC, 
				formatVariable(f, drawVenn.vennSetC[0], drawVenn.vennSetC[0], drawVenn.vennSetC[0], drawVenn.vennSetC[0]),
				formatVariable(f, drawVenn.vennSetC[1] + (h * 0.06), drawVenn.vennSetC[1] + (h * 0.06), drawVenn.vennSetC[1] + (h * 0.06), drawVenn.vennSetC[1] + (h * 0.02))
			]; // label, x, y

			drawVenn.vennAnBLabel = [
				drawVenn.labelAnB, 
				formatVariable(f, 
					drawVenn.vennSetA[0] - (drawVenn.vennSetA[2] * 1.25), 	
					drawVenn.vennSetA[0] - (drawVenn.vennSetA[2] * 1.25),
					w * 0.4,
					w * 0.4
				),
				formatVariable(f, 
					drawVenn.vennSetA[1] - (drawVenn.vennSetA[2] * 0.4),
					drawVenn.vennSetA[1] - (drawVenn.vennSetA[2] * 0.4),
					h * 0.15,
					h * 0.2
				)
			]; // label, x, y
				
			drawVenn.vennAnCLabel = [
				drawVenn.labelAnC, 
				formatVariable(f, 
					w * 0.3,
					w * 0.3,
					w * 0.25,
					w * 0.2
				),
				formatVariable(f, h * 0.7, h * 0.7, h * 0.7, h * 0.6),
			]; // label, x, y
				
			drawVenn.vennBnCLabel = [
				drawVenn.labelBnC, 
				formatVariable(f, 
					w * 0.7,
					w * 0.7,
					w * 0.75,
					w * 0.8
				),
				formatVariable(f, h * 0.7, h * 0.7, h * 0.7, h * 0.6),
			]; // label, x, y

				
			drawVenn.vennAnBnCLabel = [
				drawVenn.labelAnBnC, 
				formatVariable(f, 
					(w * 0.5) + (drawVenn.vennSetA[2] * 2),
					(w * 0.5) + (drawVenn.vennSetA[2] * 2),
					w * 0.6,
					w * 0.55
				),
				formatVariable(f, h * 0.525, 	h * 0.525, 	h * 0.15, 	h * 0.2),
			]; // label, x, y

		}

		console.groupCollapsed(`VENN DIAGRAM DRAW SETTINGS`);
			console.log("Set A: " + drawVenn.vennSetA);
			console.log("Set B: " + drawVenn.vennSetB);
			console.log("Set C: " + drawVenn.vennSetC);
			console.log("Label A: " + drawVenn.vennSetALabel);
			console.log("Label B: " + drawVenn.vennSetBLabel);
			console.log("Label C: " + drawVenn.vennSetCLabel);
			console.log("Label A B: " + drawVenn.vennAnBLabel);
			console.log("Label A C: " + drawVenn.vennAnCLabel);
			console.log("Label B C: " + drawVenn.vennBnCLabel);
			console.log("Label A B C: " + drawVenn.vennAnBnCLabel);
			console.groupEnd();
		console.groupEnd();

		return drawVenn;

}

function drawVenn(settings, ctx) {

	var f = settings.format[0];
	var w = settings.format[1];
	var h = settings.format[2];
	
	// Draw title
	ctx.textBaseline = "top";
	ctx.textAlign = "left";
	ctx.font = settings.vennFontSettings[0][0] + " " + settings.vennFontSettings[1][0] + "px " + settings.vennFontSettings[2];
	ctx.fillStyle = settings.vennFontSettings[3];
	multilineText(settings.vennTitle, ctx);

	// Draw footer
	ctx.textBaseline = "bottom";
	ctx.textAlign = "right";
	ctx.font = settings.vennFontSettings[0][2] + " " + settings.vennFontSettings[1][2] + "px " + settings.vennFontSettings[2];	
	ctx.fillStyle = settings.vennFontSettings[3];
	multilineText(settings.vennFooter, ctx);

	var drawVenn = setupVennDiagram(settings);

	ctx.textBaseline = "middle";
	ctx.font = settings.vennFontSettings[0][2] + " " + settings.vennFontSettings[1][2] + "px " + settings.vennFontSettings[2];
	ctx.fillStyle = settings.vennFontSettings[3];

	ctx.lineWidth = 4;

	// --------------------------------------------
	// SET A

	// Draw Set A -- always drawn
	ctx.beginPath();
	ctx.arc(drawVenn.vennSetA[0], drawVenn.vennSetA[1], drawVenn.vennSetA[2], 0, 2*Math.PI);
	ctx.strokeStyle = settings.vennFontSettings[3];
	ctx.stroke();

	// --------------------------------------------
	// SET B
	// Draw Set B -- always drawn
	ctx.beginPath();
	ctx.arc(drawVenn.vennSetB[0], drawVenn.vennSetB[1], drawVenn.vennSetB[2], 0, 2*Math.PI);
	ctx.strokeStyle = settings.vennFontSettings[3];
	ctx.stroke();

	// --------------------------------------------
	// SET C
	if (drawVenn.layout == "a-intersection-b-intersection-c") {

		// Draw Set C -- if required
		ctx.beginPath();
		ctx.arc(drawVenn.vennSetC[0], drawVenn.vennSetC[1], drawVenn.vennSetC[2], 0, 2*Math.PI);
		ctx.strokeStyle = settings.vennFontSettings[3];
		ctx.stroke();

		// Draw Set C Label -- if required
		ctx.textAlign = "center";
		ctx.fillText(drawVenn.vennSetCLabel[0], drawVenn.vennSetCLabel[1], drawVenn.vennSetCLabel[2]);

	}

	ctx.lineWidth = 1;

	// --------------------------------------------
	// SET LABELS
	// Draw Set A Label -- always drawn
	if (drawVenn.layout == "a-not-equal-b") { 	ctx.textAlign = "center";   }
	else if (drawVenn.layout == "a-intersection-b") {	ctx.textAlign = "right";	}
	else if (drawVenn.layout == "a-subset-b") {	
		ctx.textAlign = "right"
		// Draw connecting line -- if required
		if (f == "twitter" || f == "facebook") {
			ctx.beginPath();
			ctx.moveTo(drawVenn.vennSetALabel[1] + 20, drawVenn.vennSetALabel[2]);
			ctx.lineTo(drawVenn.vennSetA[0], drawVenn.vennSetA[1]);
			ctx.stroke();
		}
	}
	else if (drawVenn.layout == "a-intersection-b-intersection-c") {	ctx.textAlign = "right"	}
	ctx.fillText(drawVenn.vennSetALabel[0], drawVenn.vennSetALabel[1], drawVenn.vennSetALabel[2]);

	// Draw Set B Label -- always drawn
	if (drawVenn.layout == "a-not-equal-b") { 	ctx.textAlign = "center";   }
	else if (drawVenn.layout == "a-intersection-b") {	ctx.textAlign = "left";	}
	else if (drawVenn.layout == "a-subset-b") {	
		ctx.textAlign = "left";
		// Draw connecting line -- if required
		if (f == "twitter" || f == "facebook") {
			ctx.beginPath();
			ctx.moveTo(drawVenn.vennSetBLabel[1] - 20, drawVenn.vennSetBLabel[2]);
			ctx.lineTo(drawVenn.vennSetB[0] + 50, drawVenn.vennSetB[1]);
			ctx.stroke();
		}
	}
	else if (drawVenn.layout == "a-intersection-b-intersection-c") {	ctx.textAlign = "left"	}
	ctx.fillText(drawVenn.vennSetBLabel[0], drawVenn.vennSetBLabel[1], drawVenn.vennSetBLabel[2]);


	// --------------------------------------------
	// A INTERSECTION B
	if (drawVenn.layout == "a-intersection-b") {

		// Draw A intersection B Label -- if required
		ctx.textAlign = "center";
		ctx.fillText(drawVenn.vennAnBLabel[0], drawVenn.vennAnBLabel[1], drawVenn.vennAnBLabel[2]);

		// Draw connecting line -- if required
		ctx.beginPath();
		ctx.moveTo(
			drawVenn.vennAnBLabel[1], 
			drawVenn.vennAnBLabel[2] - 30
		);
		ctx.lineTo(
			formatVariable(f, w * 0.5, w * 0.5, w * 0.5, w * 0.5),
			formatVariable(f, h * 0.5, h * 0.5, h * 0.5, h * 0.5),
		);
		ctx.stroke();
		
	} else if (drawVenn.layout == "a-intersection-b-intersection-c") {

		// Draw A intersection B Label -- if required
		ctx.textAlign = "right";
		ctx.fillText(drawVenn.vennAnBLabel[0], drawVenn.vennAnBLabel[1], drawVenn.vennAnBLabel[2]);

		// Draw connecting line -- if required
		ctx.beginPath();
		ctx.moveTo(
			formatVariable(f, drawVenn.vennAnBLabel[1] + 20, drawVenn.vennAnBLabel[1] + 20, drawVenn.vennAnBLabel[1], drawVenn.vennAnBLabel[1]), 
			formatVariable(f, drawVenn.vennAnBLabel[2], drawVenn.vennAnBLabel[2], drawVenn.vennAnBLabel[2] + 30, drawVenn.vennAnBLabel[2] + 30)
		);		
		ctx.lineTo(
			formatVariable(f, w * 0.5, w * 0.5, w * 0.5, w * 0.5),
			formatVariable(f, drawVenn.vennAnBLabel[2], drawVenn.vennAnBLabel[2], h * 0.35, h * 0.35),
		);
		ctx.stroke();
		
	}

	// --------------------------------------------
	// A INTERSECTION C
	if (drawVenn.layout == "a-intersection-b-intersection-c") {

		// Draw A intersection C Label -- if required
		ctx.textAlign = "right";
		ctx.fillText(drawVenn.vennAnCLabel[0], drawVenn.vennAnCLabel[1], drawVenn.vennAnCLabel[2]);

		// Draw connecting line -- if required
		ctx.beginPath();
		ctx.moveTo(
			formatVariable(f, drawVenn.vennAnCLabel[1] + 20, drawVenn.vennAnCLabel[1] + 20, drawVenn.vennAnCLabel[1] + 15, drawVenn.vennAnCLabel[1] + 15), 
			formatVariable(f, drawVenn.vennAnCLabel[2], drawVenn.vennAnCLabel[2], drawVenn.vennAnCLabel[2], drawVenn.vennAnCLabel[2])
		);		
		ctx.lineTo(
			formatVariable(f, w * 0.45, w * 0.45, w * 0.4, w * 0.4),
			formatVariable(f, h * 0.575, h * 0.575, h * 0.55, h * 0.5),
		);
		ctx.stroke();
		
	}

	// --------------------------------------------
	// B INTERSECTION C
	if (drawVenn.layout == "a-intersection-b-intersection-c") {

		// Draw B intersection C Label -- if required
		ctx.textAlign = "left";
		ctx.fillText(drawVenn.vennBnCLabel[0], drawVenn.vennBnCLabel[1], drawVenn.vennBnCLabel[2]);

		// Draw connecting line -- if required
		ctx.beginPath();
		ctx.moveTo(
			formatVariable(f, drawVenn.vennBnCLabel[1] - 20, drawVenn.vennBnCLabel[1] - 20, drawVenn.vennBnCLabel[1] - 15, drawVenn.vennBnCLabel[1] - 15), 
			formatVariable(f, drawVenn.vennBnCLabel[2], drawVenn.vennBnCLabel[2], drawVenn.vennBnCLabel[2], drawVenn.vennBnCLabel[2])
		);		
		ctx.lineTo(
			formatVariable(f, w * 0.55, w * 0.55, w * 0.6, w * 0.6),
			formatVariable(f, h * 0.575, h * 0.575, h * 0.55, h * 0.5),
		);
		ctx.stroke();

	}

	// --------------------------------------------
	// A INTERSECTION B INTERSECTION C
	if (drawVenn.layout == "a-intersection-b-intersection-c") {

		// Draw A intersection B intersection C Label -- if required
		ctx.textAlign = "left";
		ctx.fillText(drawVenn.vennAnBnCLabel[0], drawVenn.vennAnBnCLabel[1], drawVenn.vennAnBnCLabel[2]);
		
		// Draw connecting line -- if required
		ctx.beginPath();
		ctx.moveTo(
			formatVariable(f, drawVenn.vennAnBnCLabel[1] - 20, drawVenn.vennAnBnCLabel[1] - 20, drawVenn.vennAnBnCLabel[1], drawVenn.vennAnBnCLabel[1]), 
			formatVariable(f, drawVenn.vennAnBnCLabel[2], drawVenn.vennAnBnCLabel[2], drawVenn.vennAnBnCLabel[2] + 30, drawVenn.vennAnBnCLabel[2] + 30)
		);
		ctx.lineTo(
			formatVariable(f, w * 0.5, w * 0.5, w * 0.5, w * 0.5),
			formatVariable(f, h * 0.525, h * 0.525, h * 0.475, h * 0.45),
		);
		ctx.stroke();

	}

}

function generateImage(settings) {

	// -------------------------------------------- //
	// GENERATE IMAGE
	// This function creates the canvas. It should be
	// called LAST in the sequence.

	var canvas = document.getElementById('canvas');

	canvas.width = settings.format[1];
	canvas.height = settings.format[2];
	canvas.style.width = settings.format[1] + "px";
	canvas.style.height = settings.format[2] + "px";

	var ctx = canvas.getContext('2d');

	drawBackground(settings, ctx);

	if (settings.design == "quote") {
		drawQuote(settings, ctx);
	}

	if (settings.design == "venn") {
		drawVenn(settings, ctx);
	}

	// save canvas image as data url (png format by default)
	var dataURL = canvas.toDataURL('image/jpeg', 1.0);

	// set canvasImg image src to dataURL
	// so it can be saved as an image
	previewImage = document.getElementById('canvas-img');
	previewImage.src = dataURL;

}

var outputDownload = document.getElementById('output-download');
outputDownload.addEventListener('click', function (e) {
	var today = new Date();
	var now = today.getTime();
	var dataURL = canvas.toDataURL('image/jpeg', 1.0);
	outputDownload.download = now + " michelangelo.jpeg"
    outputDownload.href = dataURL;
});



