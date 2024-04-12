import { useEffect, useState } from "react";
import { useRef } from "react";
import { CustomSelectStyled } from "./custom-select.styles";

export const convertToCustomSelect = (element, handler) => {
	const customSelectParent = element.current;
	const customSelectElement = customSelectParent.querySelector("select");
	const optionsArray = Array.from(customSelectElement.children);
	const selectSelected = document.createElement("DIV");
	const selectItems = document.createElement("DIV");
	selectSelected.classList.add("select-selected");
	selectItems.classList.add("select-items");
	customSelectParent.appendChild(selectSelected);
	customSelectParent.appendChild(selectItems);
	selectSelected.innerText = optionsArray[0].textContent;
	selectItems.classList.add("select-hide");

	selectSelected.addEventListener("click", function () {
		this.classList.toggle("select-arrow-active");
		selectItems.classList.toggle("select-hide");
	});
	optionsArray.forEach((opt, _) => {
		const optionDiv = document.createElement("DIV");
		optionDiv.innerText = opt.textContent;
		selectItems.appendChild(optionDiv);
		opt.addEventListener("click", () => {
			const [sameAsSelected] = Array.from(selectItems.children).filter((childDiv) => childDiv.innerText === opt.textContent);
			Array.from(sameAsSelected.parentElement.children).forEach((child) => {
				child.classList.remove("same-as-selected");
			});
			sameAsSelected.classList.add("same-as-selected");
			selectSelected.innerText = sameAsSelected.innerText;
			selectSelected.classList.toggle("select-arrow-active");
			selectItems.classList.toggle("select-hide");
			handler(opt.value);
		});
	});
	selectItems.addEventListener("click", (e) => {
		const optDiv = e.target;
		if (optDiv.tagName !== "DIV") return;
		const [optionPicked] = optionsArray.filter((opt) => opt.textContent === optDiv.innerText);
		optionPicked.click();
	});
};

export const CustomSelect = () => {
	const selectRef = useRef(null);
	const [_, setSelectValue] = useState(null);

	useEffect(() => {
		if (!selectRef) return;
		convertToCustomSelect(selectRef, setSelectValue);
		selectRef.current.addEventListener("change", () => {
			console.log(selectRef.current.value, "value changed");
		});
	}, [selectRef, setSelectValue]);
	return (
		<CustomSelectStyled ref={selectRef} className="custom-select" key={"11d1"}>
			<select>
				<option value="none">None (default)</option>
				<option value="high to low">High To Low</option>
				<option value="low to high">Low To High</option>
			</select>
		</CustomSelectStyled>
	);
};