'''
Created on Jun 15, 2015

@author: SFirer
'''
import unittest
from selenium import webdriver
from selenium.webdriver import firefox


class Test(unittest.TestCase):


    def testName(self):
        listofPages = ['Features','Company','Community','Solutions','Resources', 'Docs','Enterprise','Pricing','Login', 'Sign'] 
        realPageTitle = ['Sauce Labs: Features', 'Sauce Labs: Values','Open Sauce','Selenium Testing by Sauce Labs','Resources', 'Sauce Labs Docs','Sauce Labs: Enterprise-grade testing on Sauce','Sauce Labs: Pricing', 'Sauce Labs: Login', 'Sauce Labs: Sign Up for a Free Trial']  
        currentPage = '' #current page the browser is on
        driver = webdriver.Firefox()
        
        i = 0 
        for currentPage in listofPages:
            driver.get("http://www.saucelabs.com") 
            driver.find_element_by_xpath("*//a[starts-with(@class, 'hamburger')]").click()
            navbar = driver.find_element_by_id("global")
            while(not navbar.is_displayed()):
                print ("-------------------------------------------------------------------------------")
            
            navbar.find_element_by_xpath("*//a[contains(.,'"+currentPage+"')]").click()
            print ("Currently on: " + currentPage)
            assert(driver.title==realPageTitle[i])
            i+=1

if __name__ == "__main__":
    #import sys;sys.argv = ['', 'Test.testName']
    unittest.main()