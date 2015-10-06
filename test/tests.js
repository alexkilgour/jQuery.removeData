
QUnit.test('jQuery.data & removeData, default behaviour', function(assert) {
	assert.expect(2);
	var elem = document.createElement('div');

	// add data attribute and check it exists
	assert.equal(
		jQuery.data(elem, 'foo', 'bar'), 'bar',
		'jQuery.data(elem, key, value) returns value'
	);
	// check it is removable as before
	assert.equal(
		jQuery.removeData(elem, 'foo'), undefined,
		'jQuery.removeData(elem, key) returns undefined'
	);
});

QUnit.test('jQuery.attr & removeData, default behaviour', function(assert) {
	assert.expect(2);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture')

	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-foo', 'bar').attr('data-foo'), 'bar',
		'.attr getter/setter'
	);
	// removing using removeData leaves the attribute
	assert.equal(
		elem.removeData('foo').attr('data-foo'), 'bar',
		'jQuery.removeData(elem, key) returns undefined'
	);
});

QUnit.test('jQuery.attr & removeData, extended behaviour removes attribute', function(assert) {
	assert.expect(2);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture')

	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-foo', 'bar').attr('data-foo'), 'bar',
		'.attr getter/setter'
	);
	// removing using extended removeData method also removes the attribute
	assert.equal(
		elem.removeData('foo', true).attr('data-foo'), undefined,
		'jQuery.removeData(elem, key) returns undefined'
	);
});

QUnit.test('jQuery.attr & removeData, extended behaviour allow referencing with data-', function(assert) {
	assert.expect(3);
	var elem = jQuery('<div/>').appendTo('#qunit-fixture')

	// add data attribute via attr and check it exists
	assert.strictEqual(
		elem.attr('data-foo', 'bar').attr('data-foo'), 'bar',
		'.attr getter/setter'
	);
	// removing using removeData leaves the attribute
	assert.equal(
		elem.removeData('data-foo').attr('data-foo'), 'bar',
		'jQuery.removeData(elem, key) returns undefined'
	);
	// removing using extended removeData method also removes the attribute
	assert.equal(
		elem.removeData('data-foo', true).attr('data-foo'), undefined,
		'jQuery.removeData(elem, key) returns undefined'
	);
});
