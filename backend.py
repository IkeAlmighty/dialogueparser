from bottle import route, static_file

@route('/<filename>')
def get_static(filename):
    return static_file(filename=filename, root='app/')