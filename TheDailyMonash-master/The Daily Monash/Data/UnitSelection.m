clear all; close all; clc


% read in data
fileID = fopen('C:\Users\User\Desktop\The Daily Monash\MonashUnitsDatabase.txt','r');
n = textscan(fileID,'%q %d','delimiter','');
total = size(n{1});
totalEntries = total(1);
list=cell(1,totalEntries);
for i = 1:totalEntries
    fullName = char( n{1, 1}{i, 1});  
    code=fullName(1:7);
    list{i} = code;
end  

str=strjoin(list, "','");