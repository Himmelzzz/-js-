"use strict";
var redposition=[];
var pinkposition=[];
var blueposition=[];
var yellowposition=[];
var deadposition=[];

function position(x,y,w,h) {
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
}

function createred(){
    redposition[0]=new position(4,63,12,12);
    redposition[1]=new position(19,63,12,12);
    redposition[2]=new position(34,63,12,12);
    redposition[3]=new position(49,63,12,12);
    redposition[4]=new position(64,63,12,12);
    redposition[5]=new position(78,63,12,12);
    redposition[6]=new position(94,63,12,12);
    redposition[7]=new position(108,63,12,12);
}

function createpink(){
    pinkposition[0]=new position(4,78,12,12);
    pinkposition[1]=new position(18,78,12,12);
    pinkposition[2]=new position(33,78,12,12);
    pinkposition[3]=new position(48,78,12,12);
    pinkposition[4]=new position(63,78,12,12);
    pinkposition[5]=new position(78,78,12,12);
    pinkposition[6]=new position(93,78,12,12);
    pinkposition[7]=new position(108,78,12,12);
}

function createblue() {
    blueposition[0]=new position(4,93,12,12);
    blueposition[1]=new position(19,93,12,12);
    blueposition[2]=new position(34,93,12,12);
    blueposition[3]=new position(49,93,12,12);
    blueposition[4]=new position(64,93,12,12);
    blueposition[5]=new position(79,93,12,12);
    blueposition[6]=new position(94,93,12,12);
    blueposition[7]=new position(109,93,12,12);
}

function createyellow() {
    yellowposition[0]=new position(4,108,12,12);
    yellowposition[1]=new position(19,108,12,12);
    yellowposition[2]=new position(34,108,12,12);
    yellowposition[3]=new position(49,108,12,12);
    yellowposition[4]=new position(64,108,12,12);
    yellowposition[5]=new position(79,108,12,12);
    yellowposition[6]=new position(94,108,12,12);
    yellowposition[7]=new position(109,108,12,12);
}

function createdead(){
    deadposition[0]=new position(4,123,12,12);
    deadposition[1]=new position(19,123,12,12);
    deadposition[2]=new position(4,123,12,12);
    deadposition[3]=new position(19,123,12,12);
    deadposition[4]=new position(34,123,12,12);
    deadposition[5]=new position(49,123,12,12);
    deadposition[6]=new position(34,123,12,12);
    deadposition[7]=new position(49,123,12,12);
}





