{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 5,
			"minor" : 1,
			"revision" : 9
		}
,
		"rect" : [ 776.0, 666.0, 590.0, 424.0 ],
		"bglocked" : 0,
		"defrect" : [ 776.0, 666.0, 590.0, 424.0 ],
		"openrect" : [ 0.0, 0.0, 0.0, 0.0 ],
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 0,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 0,
		"toolbarvisible" : 1,
		"boxanimatetime" : 200,
		"imprint" : 0,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"boxes" : [ 			{
				"box" : 				{
					"maxclass" : "comment",
					"text" : "tween_wrap.maxpat by satcy.net",
					"patching_rect" : [ 14.0, 10.0, 198.0, 20.0 ],
					"id" : "obj-7",
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"numinlets" : 1,
					"numoutlets" : 0
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "comment",
					"text" : "easing function",
					"patching_rect" : [ 211.0, 47.0, 121.0, 20.0 ],
					"id" : "obj-5",
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"numinlets" : 1,
					"numoutlets" : 0
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "comment",
					"text" : "target",
					"patching_rect" : [ 93.0, 47.0, 48.0, 20.0 ],
					"id" : "obj-4",
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"numinlets" : 1,
					"numoutlets" : 0
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "comment",
					"text" : "millis",
					"patching_rect" : [ 149.0, 47.0, 65.0, 20.0 ],
					"id" : "obj-3",
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"numinlets" : 1,
					"numoutlets" : 0
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "number",
					"outlettype" : [ "int", "bang" ],
					"patching_rect" : [ 147.0, 66.0, 50.0, 20.0 ],
					"id" : "obj-17",
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"numinlets" : 1,
					"numoutlets" : 2
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "flonum",
					"outlettype" : [ "float", "bang" ],
					"maximum" : 1.0,
					"patching_rect" : [ 92.0, 66.0, 52.0, 20.0 ],
					"id" : "obj-13",
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"numinlets" : 1,
					"numoutlets" : 2,
					"minimum" : -1.0
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "multislider",
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 92.0, 170.0, 370.0, 206.0 ],
					"id" : "obj-11",
					"setstyle" : 3,
					"numinlets" : 1,
					"setminmax" : [ -2.0, 2.0 ],
					"numoutlets" : 2
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "umenu",
					"outlettype" : [ "int", "", "" ],
					"types" : [  ],
					"patching_rect" : [ 209.0, 66.0, 248.0, 20.0 ],
					"id" : "obj-6",
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"numinlets" : 1,
					"items" : [ "tween.ease.Linear.None", ",", "tween.ease.Quadratic.In", ",", "tween.ease.Quadratic.Out", ",", "tween.ease.Quadratic.InOut", ",", "tween.ease.Cubic.In", ",", "tween.ease.Cubic.Out", ",", "tween.ease.Cubic.InOut", ",", "tween.ease.Quartic.In", ",", "tween.ease.Quartic.Out", ",", "tween.ease.Quartic.InOut", ",", "tween.ease.Quintic.In", ",", "tween.ease.Quintic.Out", ",", "tween.ease.Quintic.InOut", ",", "tween.ease.Sinusoidal.In", ",", "tween.ease.Sinusoidal.Out", ",", "tween.ease.Sinusoidal.InOut", ",", "tween.ease.Exponential.In", ",", "tween.ease.Exponential.Out", ",", "tween.ease.Exponential.InOut", ",", "tween.ease.Circular.In", ",", "tween.ease.Circular.Out", ",", "tween.ease.Circular.InOut", ",", "tween.ease.Elastic.In", ",", "tween.ease.Elastic.Out", ",", "tween.ease.Elastic.InOut", ",", "tween.ease.Back.In", ",", "tween.ease.Back.Out", ",", "tween.ease.Back.InOut", ",", "tween.ease.Bounce.In", ",", "tween.ease.Bounce.Out", ",", "tween.ease.Bounce.InOut" ],
					"numoutlets" : 3
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "newobj",
					"text" : "tween_wrap",
					"outlettype" : [ "" ],
					"patching_rect" : [ 92.0, 130.0, 129.0, 20.0 ],
					"id" : "obj-1",
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"numinlets" : 3,
					"numoutlets" : 1
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"source" : [ "obj-17", 0 ],
					"destination" : [ "obj-1", 1 ],
					"hidden" : 0,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-13", 0 ],
					"destination" : [ "obj-1", 0 ],
					"hidden" : 0,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-1", 0 ],
					"destination" : [ "obj-11", 0 ],
					"hidden" : 0,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-6", 1 ],
					"destination" : [ "obj-1", 2 ],
					"hidden" : 0,
					"midpoints" : [ 333.0, 107.5, 211.5, 107.5 ]
				}

			}
 ]
	}

}
