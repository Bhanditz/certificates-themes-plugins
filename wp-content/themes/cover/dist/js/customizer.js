!function(a){wp.customize("blogname",function(b){b.bind(function(b){a(".site-title").text(b)})}),wp.customize("blogdescription",function(b){b.bind(function(b){a(".site-description").text(b)})}),wp.customize("display_header_text",function(b){b.bind(function(b){a(".site-title").hide()})})}(jQuery);