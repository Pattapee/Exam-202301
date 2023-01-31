import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import xpathInsure from "../../fixtures/xPath/insure.json";

When(
  /^User click link to buy insurance online and insert data in form/i,
  (datatable) => {
    datatable.hashes().forEach((value) => {
      const splitBirhday = value.Birthday.split(" ");
      const birthDayDate = splitBirhday[0];
      const birthDayMonth = splitBirhday[1];
      const birthDayYear = splitBirhday[2];

      cy.visit("https://www.tiscoinsure.com");
      cy.xpath(xpathInsure.navbarProductInsure).then((response) => {
        expect(response.text()).to.equal("ผลิตภัณฑ์ประกัน");
      });
      cy.xpath(xpathInsure.navbarProductInsure).click();
      cy.wait(1000);
      cy.xpath(xpathInsure.headerMenuHealthAndCriticalInsurance).then(
        (response) => {
          expect(response.text()).to.equal("ประกันสุขภาพและโรคร้าย");
        }
      );
      cy.xpath(xpathInsure.CTAMenuHealthAndCriticalInsurance).click();
      cy.wait(1000);
      cy.xpath(xpathInsure.CTAInsuranceCoverCancer).then((response) => {
        expect(response.text()).to.equal("ประกันคุ้มครองโรคมะเร็ง");
      });
      cy.xpath(xpathInsure.CTAInsuranceCoverCancer).click();
      cy.wait(1000);
      cy.xpath(xpathInsure.headerInsuranceTISCOZeroCancer).then((response) => {
        expect(response.text()).to.equal(
          "ประกันภัยโรคมะเร็ง TISCO Zero Cancer"
        );
      });
      cy.xpath(xpathInsure.CTABuyInsuranceOnline).then((response) => {
        expect(response.text()).to.equal(" ซื้อประกันออนไลน์ ");
      });
      cy.xpath(xpathInsure.CTABuyInsuranceOnline).click();
      cy.xpath(xpathInsure.CTAConfirmCondition).click();
      cy.xpath(xpathInsure.CTAFindInsuranceIsApproprate).click();
      cy.xpath(xpathInsure.spanValidateFormBeneficiary).then((response) => {
        expect(response.text()).to.equal("กรุณาเลือกผู้รับผลประโยชน์");
        cy.xpath(xpathInsure.InputFormBeneficiaryMe).click();
      });
      cy.xpath(xpathInsure.spanValidateFormGender).then((response) => {
        expect(response.text()).to.equal("กรุณาเลือกเพศ");
        if (value.gender === "male") {
          cy.xpath(xpathInsure.InputFormGenderMale).click();
        } else {
          cy.xpath(xpathInsure.InputFormGenderFemale).click();
        }
      });
      cy.xpath(xpathInsure.spanValidateFormDay).then((response) => {
        expect(response.text()).to.equal("กรุณาเลือกวัน");
        cy.xpath(xpathInsure.InputFormDay).select(birthDayDate);
      });
      cy.xpath(xpathInsure.spanValidateFormMonth).then((response) => {
        expect(response.text()).to.equal("กรุณาเลือกเดือน");
        cy.xpath(xpathInsure.InputFormMonth).select(birthDayMonth);
      });
      cy.xpath(xpathInsure.spanValidateFormYear).then((response) => {
        expect(response.text()).to.equal("กรุณาเลือกปี");
        cy.xpath(xpathInsure.InputFormYear).select(birthDayYear);
      });
      cy.xpath(xpathInsure.spanValidateAskBeforeChooseBuyInsurance).then(
        (response) => {
          expect(response.text()).to.equal(
            "กรุณาตอบคำถามเพื่อตรวจสอบคุณสมบัติในการเลือกซื้อผลิตภัณฑ์"
          );
          if (value.everHadaDisease === "never") {
            cy.xpath(xpathInsure.InputAskBeforeChooseBuyInsuranceNever).click();
          } else {
            cy.xpath(xpathInsure.InputAskBeforeChooseBuyInsuranceUsed).click();
          }
        }
      );
      cy.xpath(xpathInsure.CTAFindInsuranceIsApproprate).click();
      cy.xpath(xpathInsure.InputFormPlan4).click();
      // CTA for submit step 2
      cy.xpath(xpathInsure.CTAConfirmStep2).click();

      // CTA for get validate step 3
      cy.xpath(xpathInsure.CTAConfirmStep3).click();
      cy.xpath(xpathInsure.spanValidateFormPrefixName).then((response) => {
        expect(response.text()).to.equal("กรุณาเลือกคำนำหน้า");
        cy.xpath(xpathInsure.InputFormPrefixName).select("นาย");
      });
      cy.xpath(xpathInsure.spanValidateFormFirstName).then((response) => {
        expect(response.text()).to.equal("กรุณาใส่ชื่อ");
        cy.xpath(xpathInsure.InputFormFirstName).type("pattapee");
      });
      cy.xpath(xpathInsure.spanValidateFormLastName).then((response) => {
        expect(response.text()).to.equal("กรุณาใส่นามสกุล");
        cy.xpath(xpathInsure.InputFormLastName).type("singha");
      });
      cy.xpath(xpathInsure.spanValidateFormUserHeight).then((response) => {
        expect(response.text()).to.equal("กรุณาใส่ส่วนสูง");
        cy.xpath(xpathInsure.InputFormUserHeight).type("173");
      });
      cy.xpath(xpathInsure.spanValidateFormUserWeight).then((response) => {
        expect(response.text()).to.equal("กรุณาใส่น้ำหนัก");
        cy.xpath(xpathInsure.InputFormUserWeight).type("80");
      });
      cy.xpath(xpathInsure.spanValidateFormCitizen).then((response) => {
        expect(response.text()).to.equal(
          "กรุณาใส่เลขที่บัตรประจำตัวประชาชนของคุณ"
        );
        cy.xpath(xpathInsure.InputFormUserCitizen).type("1432476778511");
      });
      cy.xpath(xpathInsure.spanValidateFormUserStatus).then((response) => {
        expect(response.text()).to.equal("กรุณาระบุสถานภาพ");
        cy.xpath(xpathInsure.InputFormUserStatusMarry).click();
      });
      cy.xpath(xpathInsure.spanValidateFormPhone).then((response) => {
        expect(response.text()).to.equal("กรุณาใส่เบอร์โทรศัพท์");
        cy.xpath(xpathInsure.InputFormPhone).type("0951897112");
      });
      cy.xpath(xpathInsure.spanValidateFormEmail).then((response) => {
        expect(response.text()).to.equal("กรุณาใส่อีเมล");
        cy.xpath(xpathInsure.InputFormEmail).type("pattapees@gmail.com");
      });
      cy.xpath(xpathInsure.spanValidateFormOccupation).then((response) => {
        expect(response.text()).to.equal("กรุณาเลือกอาชีพ");
        cy.xpath(xpathInsure.InputFormOccupation).select("พ่อบ้าน");
      });
      cy.xpath(xpathInsure.spanValidateFormAsk1).then((response) => {
        expect(response.text()).to.equal("คุณยังไม่ได้เลือกคำตอบ");
        cy.xpath(xpathInsure.InputFormAsk1).click();
      });
      cy.xpath(xpathInsure.spanValidateFormAsk2).then((response) => {
        expect(response.text()).to.equal("คุณยังไม่ได้เลือกคำตอบ");
        cy.xpath(xpathInsure.InputFormAsk2).click();
      });
      cy.xpath(xpathInsure.spanValidateFormAsk3).then((response) => {
        expect(response.text()).to.equal("คุณยังไม่ได้เลือกคำตอบ");
        cy.xpath(xpathInsure.InputFormAsk3).click();
      });
      cy.xpath(xpathInsure.spanValidateFormAsk4).then((response) => {
        expect(response.text()).to.equal("คุณยังไม่ได้เลือกคำตอบ");
        cy.xpath(xpathInsure.InputFormAsk4).click();
      });
      cy.xpath(xpathInsure.spanValidateFormAsk5).then((response) => {
        expect(response.text()).to.equal("คุณยังไม่ได้เลือกคำตอบ");
        cy.xpath(xpathInsure.InputFormAsk5).click();
      });
      cy.xpath(xpathInsure.spanValidateFormAsk6).then((response) => {
        expect(response.text()).to.equal("คุณยังไม่ได้เลือกคำตอบ");
        cy.xpath(xpathInsure.InputFormAsk6).click();
      });
      // CTA for submit step 3
      cy.xpath(xpathInsure.CTAConfirmStep3).click();

      // CTA for get validate step 4
      cy.get(".uk-flex-column > .uk-flex > .uk-button").click();
      cy.xpath(xpathInsure.spanValidateFormNumberAddress).then((response) => {
        expect(response.text()).to.equal(
          "กรุณาใส่บ้านเลขที่ - หมู่ที่ - หมู่บ้านของคุณ"
        );
      });
      cy.xpath(xpathInsure.spanValidateFormSubDistrict).then((response) => {
        expect(response.text()).to.equal("กรุณากรอกตำบล / แขวงที่คุณอยู่");
      });
      cy.xpath(xpathInsure.spanValidateFormDistrict).then((response) => {
        expect(response.text()).to.equal("กรุณากรอกอำเภอ / เขตที่คุณอยู่");
      });
      cy.xpath(xpathInsure.spanValidateFormProvince).then((response) => {
        expect(response.text()).to.equal("กรุณากรอกจังหวัดที่คุณอยู่");
      });
      cy.xpath(xpathInsure.InputFormNumberAddress).type("8");
      cy.xpath(xpathInsure.InputFormSubDistrict).type("สายไหม");
      cy.wait(200);
      cy.xpath(`//*[@id="suggestions"]/ul/li/div/a`).click();

      cy.xpath(xpathInsure.InputFormGiveBenefits).click();
      cy.xpath(xpathInsure.InputFormWayForDelivery).click();
      cy.xpath(xpathInsure.InputFormRefrainVatInLaw).click();
      // CTA for submit step 4
      cy.get(".uk-flex-column > .uk-flex > .uk-button").click();
      //CTA for submit preview page step 5
      cy.xpath(xpathInsure.CTAConfirmPreviewPageStep5).click();
    });
    cy.xpath(xpathInsure.headerRequestOTP).then((response) => {
      expect(response.text()).to.equal("กรุณากรอกรหัส OTP เพื่อยืนยันตัวตน");
    });
  }
);
Then(`User should redirect to OTP request page`, async () => {
  cy.xpath(xpathInsure.headerRequestOTP).then((response) => {
    expect(response.text()).to.equal("กรุณากรอกรหัส OTP เพื่อยืนยันตัวตน");
  });
});
