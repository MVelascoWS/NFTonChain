import { NFTonChain_backend } from "../../declarations/NFTonChain_backend";
import { IDL } from "@dfinity/candid";
import { Principal } from "@dfinity/principal";

document.querySelector("form.balance").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");
  
  const identity = document.getElementById("identity").value.toString();
  const principal = Principal.fromText(identity);
  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the balance method
  const balance = await NFTonChain_backend.balanceOfDip721(principal);
  button.removeAttribute("disabled");

  document.getElementById("balance").innerText = balance;

  return false;
});

document.querySelector("form.limit").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");
  
  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the maxLimit method

  const maxLimit = await NFTonChain_backend.getMaxLimitDip721();

  button.removeAttribute("disabled");

  document.getElementById("limit").innerText = maxLimit;

  return false;
});

document.querySelector("form.token").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");
  
  const tokenID = document.getElementById("tokenID").value.toString();
  let x = BigInt(tokenID);
  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the owner method
  const owner = await NFTonChain_backend.ownerOfDip721(x);

  button.removeAttribute("disabled");

  document.getElementById("owner").innerText = owner;

  return false;
});
