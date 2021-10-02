import { vCard } from "./deps.ts";
export async function jsonToCard(postJSON:Record<string,string>):Promise<string>{

  const card = await new vCard();

  // card.uid = postJSON.uid || undefined;
  // card.anniversary?: Date;
  // card.birthday?: Date;
  // card.homeAddress?: vCardMailingAddress;
  // card.logo?: vCardPhoto;
  // card.photo?: vCardPhoto;
  // card.socialUrls?: Map<string, string>;
  // card.workAddress?: vCardMailingAddress;
  // card.version = postJSON. = '3';
  card.cellPhone = postJSON.cellPhone;
  card.pagerPhone = postJSON.pagerPhone;
  card.email = postJSON.email;
  card.workEmail = postJSON.workEmail;
  card.firstName = postJSON.firstName;
  card.formattedName = postJSON.formattedName;
  card.gender = postJSON.gender;
  card.homePhone = postJSON.homePhone;
  card.homeFax = postJSON.homeFax;
  card.lastName = postJSON.lastName;
  card.middleName = postJSON.middleName;
  card.namePrefix = postJSON.namePrefix;
  card.nameSuffix = postJSON.nameSuffix;
  card.nickname = postJSON.nickname;
  card.note = postJSON.note;
  card.organization = postJSON.organization;
  card.otherEmail = postJSON.otherEmail;
  card.otherPhone = postJSON.otherPhone;
  card.role = postJSON.role;
  card.source = postJSON.source;
  card.title = postJSON.title;
  card.url = postJSON.url;
  card.workUrl = postJSON.workUrl;
  card.workPhone = postJSON.workPhone;
  card.workFax = postJSON.workFax;
  if (card.nameSuffix === "throw-me") throw Error("YOU did this!")

  return card.getFormattedString();
}