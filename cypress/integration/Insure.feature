Feature: The Insure page

    User want to test function buy insurance online something xxxx

    Scenario: User Buy Insurance online is Tisco Zero Cancer group
        #Given User want to buy insurance online is tisco zero cancer group
        When User click link to buy insurance online and insert data in form
            | gender | Birthday        | everHadaDisease |
            | male   | 28 กรกฎาคม 2536 | never           |
            | female | 31 มกราคม 2536  | never           |
        Then User should redirect to OTP request page
