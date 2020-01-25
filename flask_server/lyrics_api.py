#https://api.lyrics.ovh/v1/artist/title

import requests
import argparse

def get_client_request(artist_requested, song_requested):
    r = requests.get(f'http://127.0.0.1:5000/getquery?')
    if r.status_code == 200:
        payload = r.json()
        artist_requested = payload['artist']
        song_requested = payload ['song_title']
        print(artist_requested, song_requested)

    get_lyrics(artist_requested, song_requested)


def get_lyrics(artist, song_title):
    r2 = requests.get(f'https://api.lyrics.ovh/v1/{artist}/{song_title}')


    if r2.status_code == 200:
        payload = r2.json()
        print(payload)
        result = payload['lyrics']
        if not result:
            return None
        return result
    else:
        print(f' ERROR: the request returned status {r2.status_code}')
        return None

def analyse_lyrics(lyrics):
    lines = 0
    word_count = 0
    vocals = 0
    repeated_word = dict()

    for line in lyrics.split('\n'):
        if line != "":
            lines += 1


    for word in lyrics.split():
        # print(word)
        word_count += 1
        counter = 0
        word = word.lower()
        word = word.replace("(", "")
        word = word.replace(")", "")
        word = word.replace(",", "")

        if word in repeated_word:
            repeated_word[word] = repeated_word[word] + 1
        else:
            repeated_word[word] = 1

        for vocal in ('a', 'e', 'i', 'o', 'u'):
            if vocal in word:
                vocals += 1
    sorted_repeated_word = sorted(repeated_word.items(), key=lambda x: x[1], reverse=True
                                  )  # so this became a list of tuples now! but i couldnt find
    # another solution for sorting them in decreasing order (DICTs are unordered)
    # for paired_tuples in sorted_repeated_word:
    #     print(f'{paired_tuples[1]}: {paired_tuples[0]}')

    # for key in repeatedword.keys(): DICT VERSION
    #     print(key, ":", repeated_word[key])

    print(f"the total count of words in this song is: {word_count} \r\n")
    print(f"the total count of vocals in this song is: {vocals} \r\n")
    print(f'the amount of lines is: {lines}')
    # word_count_json = word_count.json()
    # final_result= sorted_repeated_word.json()
    # return {'word_count': word_count, 'vowels':vocals, 'amount_of_lines': lines,
    #         'breakdown_of_words': sorted_repeated_word}
    return(repeated_word)


# if __name__ == '__main__':
#     get_client_request()
#
#     parser = argparse.ArgumentParser()
#     parser.add_argument('artist', help='the name of the music artist you want the lyrics. In case its '
#                                        'more than one word please use double quotes' )
#     parser.add_argument('song_title', help='the title of the song you want the lyrics. In case its '
#                                        'more than one word please use double quotes ')
#     parser.add_argument('--write-file', action='store_true', help='do you want to dump the lyrics into a txt file?')
#     parser.add_argument('--foo')
#     args = parser.parse_args()
#     # print(args)
#
#
#
#
#     if args.write_file:
#         filename=f'{args.artist}+{args.song_title}.txt'
#         file = open(filename, 'w')
#         file.write(f'Author: {args.artist} Song: {args.song_title}\r')
#         file.write(f"the statistics of the words in this song:\r")
#         file.write(f"the total count of words in this song is: {word_count} \r")
#         file.write(f"the total count of vocals in this song is: {vocals} \r")
#         # for key in repeated_word:
#         #     file.write(f'{key}: {repeated_word[key]} \r') DICT version
#         for tuple in sorted_repeated_word:
#             file.write(f'{tuple[0]}:{tuple[1]} \r')
#         file.write(f'\r \rlyrics:')
#         file.write(f'\r{lyrics}')
#         file.close()
#         print(f'written into {filename}')
#     else:
#         print(lyrics)




